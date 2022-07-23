var dotenv = require("dotenv");
dotenv.config();
require('./config/db');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const routeManager = require('./routes')
const keys = require("./config/keys");

// const loggerModule = require('./logger/main');
// const {accessLogger, systemLogger, errorLogger} = loggerModule;
var morgan = require("morgan");
var redis = require("redis");
const expressSanitizer = require("express-sanitizer");

//localdata
var localData = require('./localDataJson/localrundata');
var emitedText = require("./localDataJson/Configure");

//error
const globalErrorHandler = require('./controller/errorController')

var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
const fetch = require("node-fetch");
var unhandleMSG = "have not any response";
app.use(function (req, res, next) {
  res.io = io;
  next();
});

console.log("Environment: ",process.env.NODE_ENV)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSanitizer());
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", routeManager);

const systemLog = {
  write: function (message, encoding) {
    // systemLogger.log({
    //   level: "info",
    //   message: {
    //     title: message
    //   }
    // });
  }
};
app.use(morgan("combined", { stream: systemLog }));

//checking user exist in db
var checkUserPersists = function (id, source) {
  let url = `${keys.SOCKET_PROTOCOL}://${keys.DASHBOARD_SERVER}:${keys.DASHBOARD_PORT}/${keys.BASEPATH}/visitors/userId?userId=${id}&access_token=${keys.ADMIN_TOKEN}`;
  let organizationId = keys.ORGANIZATION_ID;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      source: source,
      user_id: id,
      organizationId: organizationId
    })
  });
};

s = [];
io.sockets.on("connection", function (socket) {
  console.log("user connected");
  socket.on("disconnect", function () {
    let messageJSON = {
      title: null,
      ipAddress:
        socket.handshake.headers["x-forwarded-for"],
      isConnected: "disconnected",
      socketID: socket.id,
      userID: null,
      botName: "NepalBank-bot",
      source: "web",
      context: "live-chat"
    };

    // accessLogger.log({
    //   level: "info",
    //   message: messageJSON
    // });
  });

  socket.on("join", function (room) {
    console.log("user joined", room)
    socket.join(room);
    if (room == "Agent") { 

    } else {
      // console.log('hello')
      setIntervention(room);
    }
  });

  socket.on("agent_join", function (room) {
    // console.log("joined")
    socket.join(room);
  });

  socket.on("alert", function (message) {
    io.to("Agent").emit("agent_alert", message);
  });


  /* if agent disconnected during conversation 
  socket.on("user_disconnected", function (message, space) {
    io.to(space).emit("message_received", message);
  });*/

  socket.on("agent_send", function (message, space, source, senderId) {
    // console.log("Agent_send", message);
    // console.log(space, "space value")
    io.to(space).emit("message_received", message);
    if (source == "fb") {
      postFbMessage(message, space, "outgoing", senderId)
        .then((data) => data.json())
        .then((data) => {
          debugger;
        })
        .catch((err) => {
          debugger;
        });
    }
    else {
      // for message persistence.
      console.log("posting to user")
      postMessage(message, space, "outgoing", senderId);
    }
  });
  socket.on("user_message", function (message, userID) {
    // console.log(message, "user_message");
    let messageJSON = {
      title: message,
      ipAddress:
      socket.handshake.headers["x-forwarded-for"],
      isConnected: "connected",
      socketID: socket.id,
      userID: userID,
      botName: "NepalBank-bot",
      source: "web",
      context: "live-chat"
    };
    // accessLogger.log({
    //   level: "info",
    //   message: messageJSON
    // });
    checkUserPersists(userID, "web")
      .then(res => res.json())
      .then(data => {
        // console.log(data, "posted")
        return postMessage(message, userID, "incoming", 'human');
      })
      .then((data) => {
        // console.log(data, "this is test data");
        debugger;
      })
      .catch(err => {
        messageJSON.title = err.message;
      });


    // if(message === 'shine0102'){
    //   socket.emit('message_received',localData.formLead)
    // }
    if(message ==='menu'){
      socket.emit('message_received',localData.MainHome)
    }
    else if(message === 'Payment'){
      socket.emit('message_received',localData.paymentOpt)
    }
    else if(message === 'bankdetails'){
      socket.emit('message_received',localData.bank_detail)
    }
    else if(message === 'mobile'){
      socket.emit('message_received',localData.mobileBanking)
    }
    else if(message === 'internet'){
      socket.emit('message_received',localData.InternetBanking)
    }  
    else if(message === 'QR'){
      socket.emit('message_received',localData.QRRequest)
    }
    else if(message === 'shine banking product'){
      socket.emit('message_received',localData.QueriesListReply)
    }
    else if(message === 'shine services'){
      socket.emit('message_received',localData.ServiceListReply)
    }
    else if(message === 'shine atm or branch locator'){
      socket.emit('message_received',localData.AtmBranchListReply)
    }
    else if(message === 'shine forex'){
      socket.emit('message_received',localData.shineForex)
    }
    else if(message === 'shine contact Us'){
      socket.emit('message_received',localData.shineContactUs)
    }
    else if(message === 'shine Feedback and Complaiin'){
      socket.emit('message_received',localData.shineFeedback)
    }
    else if(message === 'Atm Location'){
      socket.emit('message_received',localData.Atmlocation)
    }
    else if(message === 'Branch Loacation'){
      socket.emit('message_received',localData.branchlocation)
    }
    else if(message === 'Shine Feedback'){
      socket.emit('message_received',localData.feedback)
    }
    else if(message === 'Customer Complain'){
      socket.emit('message_received',localData.complain)
    }
    else if(message === 'Mobile Banking services'){
        socket.emit('message_received',localData.ServiceRequest)
    }
    else if(message === 'Balance Inquery'){
      socket.emit('message_received',localData.BalanceInquiry)
    }
  else if(message === 'Block Card services'){
    socket.emit('message_received',localData.BlockCard)
    }
    else if(message === 'Repin Entry'){
      socket.emit('message_received',localData.RepinEntry)
    }
  else if(message === 'Dispute Handling'){
    socket.emit('message_received',localData.DisputeHandling)
    }

    else if(message === 'test'){
      socket.emit('message_received',localData.test)
      }

  


    // if  nepali language selected
    else if(message === 'hello nepal12'){
      socket.emit('message_received',localData.ShineHomeNepali)
    }
    else if(message === 'Banking Services'){
      socket.emit('message_received',localData.QueriesListReplyNepali)
    }
    else if(message === 'Shine forex'){
      socket.emit('message_received',localData.shineForexNeplai)
    }
    else if(message === 'shine Atm/Branch'){
      socket.emit('message_received',localData.shineForexNeplai)
    }
    else {
      console.log("this is hit")
      checkInterventionExist(userID, redis).then(async (value) => {
        console.log(userID)
        console.log(value, "value");
        if(!value){
          console.log("intervention not exist");
          if(message === "human"){
            // console.log(value, "socket");
            const baseUrl = `${keys.SOCKET_PROTOCOL}://${keys.SOCKET_HOST}:${keys.SOCKET_PORT}`;
            let url = `${baseUrl}/rest/v1/Organization`;
            console.log(url, "url");
            // const res = await fetch(url, {
            //   method: "GET",
            //   headers: {
            //     "Content-Type": "application/json",
            //   }
            // })
            // const info = await res.json();
            // console.log("Inoformation", info);
            fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((data) =>{
              console.log("up to here")
              return data.json()})
            .then((data) => {
              // console.log(data, "dashboard");
              if(data.data.availability == false){
                setTimeout(function () {
                  socket.emit("message_received", emitedText.UnavailableLiveChat);
                }, 1000);
              }
              if (data.data.availability == true){
                const client = redis.createClient({
                  host: keys.REDIS_SERVER,
                });
                let id = userID + "_Agent";
                client.set(`${id}`, "", "EX", 120, function(err, reply){
                  setTimeout(function () {
                    socket.emit("message_received", emitedText.liveChatStarted);
                  }, 1000);
                });
              }
            })
            .catch((err) => {
              console.log("ERRRRRRRRRR")
              socket.emit("Server not respond");
            });
          } else {
            console.log("Getting intent request !!!!!")
            getIntentRequest(message, socket, userID)
          }
        }
        else{
          // console.log("redis value is available in redis", userID);
          // console.log(userID, "userID");
          // console.log(message, "message");
          io.to(userID).emit("agent_received", message, userID);
          // console.log("message sent to user");
        }
      })
    }
  });
});

function checkInterventionExist(userId, redis) {
  const client = redis.createClient({
    host: keys.REDIS_SERVER,
  });
  // console.log(client, "client");
  client.on("error", function (err) {
    // console.log("Error whent connecting " + err);
  });
  let id = userId + "_Agent"; //replace a with A
  // console.log(id, "id");
  return new Promise((resolve, reject) => {
    client.exists(id, (err, reply) => {
      resolve(reply);
    });
  });
}

function postFbMessage(message, userID, type, senderId) {
  let host = keys.MESSANGER_BOT_HOST;
  let port = keys.MESSANGER_BOT_PORT;
  let chatKey = keys.MESSANGER_BOT_KEY;
  let chatOrg = keys.MESSANGER_BOT_ORG_ID;
  let protocol = "http://";
  let path = "/chathook";
  let recipientId = userID;
  let url = protocol + host + ":" + port + path;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      chatkey: `sha1=${chatKey}`,
      organizationId: chatOrg
    },
    body: JSON.stringify({
      object: "page",
      entry: [{
        id: "100836117978139",
        time: Date.now(),
        messaging: [{
          sender: {
            id: userID
          },
          recipient: {
            id: recipientId
          },
          timestamp: Date.now(),
          chat: {
            text: message,
            senderId: senderId
          }
        }]
      }]
    })
  }).catch(err => {
    console.log("cant post");
  });
}

function setIntervention(userId) {
  let host = keys.INTENT_SERVER;
  let port = keys.INTENT_SERVER_PORT;
  let utterURL = keys.INTENT_UTTER_URL;
  let protocol = "http://";
  let url = protocol + host + ":" + port + "/" + utterURL + "/agent?userid=" + userId;
  (async () => {
    try{
      const response = await fetch(url);
      const json = await response.json();
      console.log(json, "json");
    }catch(err){
      console.log(err);
    }
  })();
}

async function getIntentRequest(utter, socket, userID) {
  let host = keys.INTENT_SERVER;
  let port = keys.INTENT_SERVER_PORT;
  let utterURL = keys.INTENT_UTTER_URL;
  // let protocol = keys.SOCKET_PROTOCOL+"://";

 // let url = `${keys.SOCKET_PROTOCOL}://${host}:${port}/${utterURL}/?q=${utter}`;
 let url = 'http://localhost:5005/webhooks/rest/webhook'
 try{
  console.log(url, "url intent")
  let obj ={
    senderId:userID,
    message: utter
  }
  const response=await fetch(url,{
    method:'POST',
    body: JSON.stringify(obj)

  })
    

  console.log(response, "response");
   if(response){
     const data = await response.json();
     socket.emit("message_received", data[0].custom);
     console.log("response data", data[0].custom);
     let message = unhandleMSG;
     try {
       if (data.response) {
         if (data.response.hasOwnProperty("message")) {
           message = data.response;
         }
         if (data.response.title && typeof data.response.title === "string") {
           message = data.response.title;
         } else {
           if (typeof data.response.title === "object" && Object.keys(data.response.title).length) {
             if (data.response.title.hasOwnProperty("title")) {
               message = data.response.title.title;
             } else {
               message = data.response.title[Object.keys(data.response.title)[0]];
             }
             if (typeof message === "object" && Object.keys(message).length) {
               message = message[Object.keys(message)[0]];
             }
           }
         }
       }
     } catch (err) {
       console.log("not captured data ");
     }
     console.log("This is calling in intent function")
     return postMessage(message, userID, "outgoing", "bot");
   }else{
     throw new Error("response is null");
   }
}catch(err){
  console.log("error in getIntentRequest",err);
}

}

//copy postmessage
function postMessage(message, userID, type, senderId) {
  let host = keys.DASHBOARD_SERVER;
  let port = keys.DASHBOARD_PORT;
  let protocol = "http://";
  let path = "/rest/v1/messages/userId/{id}?userId=" + userID + "&access_token=" + keys.ADMIN_TOKEN;
  console.log(host, protocol)
  let url = protocol + host + ":" + port + path;
  // console.log("url", url);
  if (typeof message === "object") {
    let title = "";
    for (key in message) {
      title = title + key + ":" + message[key] + " ";
    }
    message = title;
  }

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      senderId: senderId,
      usertype: type == "incoming" ? "human" : "bot",
      text: message,
    }),
  })
    .then((data) => {
      console.log("Posting Data", data);
    })
    .catch((err) => {
      console.log("Error in posting data", err);
    });
}

//error handler
app.use(globalErrorHandler)

module.exports = {
  app: app,
  server: server
};
