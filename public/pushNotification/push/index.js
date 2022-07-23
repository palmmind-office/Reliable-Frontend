
if (window.requestIdleCallback) {
  requestIdleCallback(function () {
    fingerprint()
  })
} else {
  setTimeout(function () {
    fingerprint()
  }, 500)
}

var client;
var fingerprint;
var details;

function fingerprint() {
  client = new ClientJS();
  fingerprint = client.getFingerprint();
  console.log(fingerprint);
  details = {
    browser: client.getBrowser(),
    os: client.getOS(),
    osVersion: client.getOSVersion(),
    device: client.getDevice(),
    deviceType: client.getDeviceType(),
    deviceVendor: client.getDeviceVendor(),
    cpu: client.getCPU()
  };
}

firebase.initializeApp({
  messagingSenderId: "244208985229"
});

function closeWindow() {
  window.open('', '_parent', '');
  window.close();
}

$(document).ready(function () {
  let pushnotification = {
    init: function () {
      this.notifyMe();
    },
    prvateoption:function(){
      let section = $('#pushnotification');
      $(`<p style="float:left">Chrome is currently blocking notifications.<br>Please follow these instructions to subscribe:</p>`).appendTo(section);
      let imag=$(`<img src="img/Unblock-Chrome.png">`).appendTo(section);
      let footer = $(` <footer class="footer">
          <button id="unblocked-cancel" class="align-right secondary popup-button" onclick=" closeWindow();">Cancel</button>
          <button id="unblocked-allow" class="align-right primary popup-button" onclick="initFirebaseMessagingRegistration();">Retry</button>
          </footer>`).appendTo(section);
    },
    renderlayout: function () {
      let section = $('#pushnotification');
      let sectiondiv = $(`<div class="row"></div>`).appendTo(section);
      let section1 = $(`<div class="col=md-10"></div>`).appendTo(sectiondiv);
      $(`<div class="header"><h3>${window.location.hostname}</h3></div>`).appendTo(section1);
      $(`<div class="text">
          <p style="font-size: 16px;color: #a09b9b;">We'd like to send you notifications for the latest news and updates.</p>
          <div id="token" style="color:lightblue"></div>
              <div id="message" style="color:lightblue"></div>
              <div id="notification" style="color:green"></div>
              <div id="error" style="color:red"></div>
          </div>`).appendTo(section1);
      $(`<div class="shadowbox"><div class="contents row">
          <div class="col-md-4"><p>Icon</p></div>
          <div class="col-md-8">
              <p>PalmMind is an application development company based in Kathmandu</p>
          </div></div></div>`).appendTo(section1);
      let footer = $(` <footer class="footer">
          <button id="unblocked-cancel" class="align-right secondary popup-button" onclick=" closeWindow();">No Thanks</button>
          <button id="unblocked-allow" class="align-right primary popup-button" onclick="initFirebaseMessagingRegistration();">Continue</button>
          </footer>`).appendTo(section);
      },
      notifyMe: function(){
        if (("Notification" in window)) {
          if (Notification.permission === "granted") {
            this.renderlayout();
          }
        }
        if (Notification.permission == "denied" || Notification.permission == "block") {
          alert("denide")
           this.prvateoption();
        }
      }
    }
    pushnotification.init();
  });



var messaging = firebase.messaging();

function initFirebaseMessagingRegistration() {
  var messageElement = document.getElementById("message");
  var tokenElement = document.getElementById("token");
  var notificationElement = document.getElementById("notification");
  let errorElement = document.getElementById("error");
  messaging.requestPermission().then(function () {
    console.log("messaging token", messaging.getToken());
    messaging.getToken().then(function (token) {
        tokenElement.innerHTML = `<div class="alert alert-success" role="alert">Successfully Submited</div>`;
        sendSubscriptionToServer(token, fingerprint, details);
      })
      .catch(function (err) {
        errorElement.innerHTML = "Error: " + err;
        console.log("Didn't get notification permission", err);
      })
  })
}


messaging.onMessage(function (payload) {
  var notificationElement = document.getElementById("notification");
  console.log("Message received. ", JSON.stringify(payload)+ 'and' +payload.data.notification);
  notificationElement.innerHTML = notificationElement.innerHTML + " " + payload.data.notification;
});


messaging.onTokenRefresh(function () {
  messaging
    .getToken()
    .then(function (refreshedToken) {
      console.log("Token refreshed.");
      tokenElement.innerHTML = "Token is " + refreshedToken;
      sendSubscriptionToServer(refreshedToken, fingerprint, details)
    })
    .catch(function (err) {
      errorElement.innerHTML = "Error: " + err;
      console.log("Unable to retrieve refreshed token ", err);
    });
});


function sendSubscriptionToServer(token, fingerprint, details) {
  console.log(token, fingerprint, details);
  console.log("finger print", fingerprint);
  $.ajax({
    url: 'http://localhost:5000/subscription',
    type: "POST",
    data: {
      'token': token,
      'fingerprint': fingerprint,
      'details': JSON.stringify(details)
    },
    cache: false
  }).then((data) => {
    console.log("push", data);
  }).catch(() => {
    console.log("server fel");
  });
}