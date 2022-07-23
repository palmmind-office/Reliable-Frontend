import { userList } from "./userList";
import { toaster } from "./toasterModule";
import { socketModule } from "./socket.module";
import { env } from "../../env";
import { LocalStorage } from "./assets/localstorage";
import { sandbox } from "./sandBoxModule";

function boot() {
  getUserList();
  fetchOrganizationDetail();
  // if no token redirect to login page
  if (!localStorage.getItem("token")) {
    window.location.href = `${env.protocol}://${env.server}:${env.port}/chat`;
  }
//connecting socket with socket server running this port 9009
  let socketUrl = `${env.protocol}://${env.server}:${env.port}`;
  socketModule.init(socketUrl);

  //for Agent Offline Mod
  /*function newOfflineMsg() {
    let namespace = userList.userId;
    let message ="Now user was in Offline Mod";
    socketModule.socket.emit("user_disconnected", message, namespace);
  }*/

  function newMessage() {
    console.log("this is hit")
    let namespace = userList.userId;
    let message = $(".message-input input").val();
    console.log(message, "message");
    let senderInfo = localStorage.getItem('userName');
    //send message to bot (emit)
    socketModule.socket.emit("agent_send", message, namespace, userList.source, senderInfo);

    if ($.trim(message) == "") {
      return false;
    }
    let userName=localStorage.getItem('userName');
    $(`<li class="sent"><img src="./img/robot.jpg" alt=""/><p><strong>${userName}</strong><br>${message}</p></li>`).appendTo($(".messages ul"));
    $(".message-input input").val(null);
    $(".contact.active .preview").html("<span>You: </span>" + message);

    $(".messages").animate(
      {
        scrollTop: $("#message-container ul")[0].scrollHeight
      },
      "fast"
    );
  }

  function getUserList(){
    let id= localStorage.getItem('userId');
    let token= localStorage.getItem('token');
     fetch(`${env.protocol}://${env.server}:${env.port}/rest/v1/users/${id}`, {
         method: "GET",
         headers: {
             "Content-Type": "application/json",
             "accesstoken": token
         }
     }).then((res) => res.json()).then((data) => {
      let $name=$(`<span class="badge badge-primary OrgName">${data.data.firstname} ${data.data.lastname}</span>`);
      $('#logout').append($name);
         console.log("response data",data);
         if(data.data.availability===true){
          let onlineStatus = document.getElementById('checkbox').checked;
          onlineStatus = !onlineStatus;
          document.getElementById('checkbox').checked = onlineStatus;
          $('#toggleAvailable').modal('hide');
          $('#toggleSwitch .aval').html((onlineStatus == true) ? 'Online': 'Offline');
         }
      });
  }

  function fetchOrganizationDetail(){
    fetch(`${env.protocol}://${env.server}:${env.port}/rest/v1/Organization`).then(res=>res.json())
    .then(data=>{console.log("organization details",data);
    let $OrganizationName=$(`<h3>Last 24 Hours<span class="badge badge-secondary">${data.data.name}</span></h3>`);
    $('#OrganizationName').append($OrganizationName);
  });
  }
//for posting in livechat online or offline mod
  function postUserList(){
    let tokenuser= localStorage.getItem('token');
    fetch(`${env.protocol}://${env.server}:${env.port}/rest/v1/users/post`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "accesstoken": tokenuser
      }
  }).then((res) => res.json()).then((data) => {
      console.log("post response data",data.data.availability);
      if(data.data.availability===true){
       let onlineStatus = document.getElementById('checkbox').checked;
       onlineStatus = !onlineStatus;
       document.getElementById('checkbox').checked = onlineStatus;
       $('#toggleAvailable').modal('hide');
       $('#toggleSwitch .aval').html((data.data.availability == true) ? 'Online': 'Offline');
      }
      else if(data.data.availability==false){
        let onlineStatus = document.getElementById('checkbox').checked;
        onlineStatus = !onlineStatus;
        document.getElementById('checkbox').checked =!onlineStatus;
        $('#toggleAvailable').modal('hide');
        $('#toggleSwitch .aval').html((onlineStatus == true) ? 'Online': 'Offline');
      }
   });
  }

  function highLightBtn(dom) {
    $("#source-container button").removeClass("active");
    $(dom).addClass("active");
  }

  $(".submit").click(function() {
    newMessage();
  });

  $('#PowerOff').click(()=>{
    bootbox.confirm("Do You want to LogOut ?", function(result){
      if(result==true){
        userList.LogOut();
      }
    })
  });

  $("#source-container .facebook").click(function(event) {
    userList.clear();
    userList.init("fb");
    highLightBtn(this);
    sandbox.notifyVisitor("chatBotFbVisitor");
    $(this)
      .find(".badge")
      .text("");
  });

  $("#source-container .web").click(function(event) {
    userList.clear();
    userList.init("web");
    highLightBtn(this);
    sandbox.notifyVisitor("chatBotWebVisitor");
    $(this).find(".badge").text("");
  });

  $("#toggleSwitch").click(function(event){
    $('#toggleAvailable').modal('toggle');
    event.stopPropagation();
    event.preventDefault();
    $("#save").one('click', function(event){
           let onlineStatus = document.getElementById('checkbox').checked;
          //  console.log("online status",onlineStatus);
            onlineStatus = !onlineStatus;
            console.log("online status",onlineStatus);
            document.getElementById('checkbox').checked = onlineStatus;
            $('#toggleAvailable').modal('hide');
            $('#toggleSwitch .aval').html((onlineStatus == true) ? 'Online': 'Offline');
            postUserList();
           /* if(onlineStatus==false){
              newOfflineMsg();
            }*/
            event.stopPropagation();
            event.preventDefault();
    });
  });

  $(window).on("keydown", function(e) {
    if (e.which == 13) {
      newMessage();
      return false;
    }
  });
  //get form bot(listion) 
  socketModule.socket.on("agent_received", function(message, userID) {
    if(userList.userId === userID){
      $(
        '<li class="replies"><img src="./img/boy.png" alt="" /><p>' +
          message +
          "</p></li>"
      ).appendTo($(".messages ul"));
      $(".contact.active .preview").html("<span>You: </span>" + message);
      $(".messages").animate(
        {
          scrollTop: $("#message-container ul")[0].scrollHeight
        },
        "fast"
      );
    }
  });

  socketModule.socket.on("agent_alert", function(message, type) {
    if (!message) {
      return;
    }
    toaster.init(
      "Visitor " + message + " wants to talk with you",
      "header",
      5000
    );

    let isFb = type == "fb";
    if (isFb) {
      LocalStorage.setItem("chatBotFbVisitor", message);
    } else {
      LocalStorage.setItem("chatBotWebVisitor", message);
    }

    sandbox.notify(isFb);
  });
}

(function() {
  boot();
  userList.init("web");
  $("#source-container button").removeClass("active");
  $("#source-container .web").addClass("active");
})();
