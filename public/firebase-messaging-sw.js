
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

  firebase.initializeApp({
  messagingSenderId: "244208985229",
  apiKey: "AIzaSyCi7xiauufvqV_K6VDKWgfAmX6x4SeUS4I",
  authDomain: "pushnotification-75cf0.firebaseapp.com",
  projectId: "pushnotification-75cf0",
  storageBucket: "pushnotification-75cf0.appspot.com",
  //messagingSenderId: "721705930878",
  appId: "1:721705930878:web:877c76b84a03bb53dec82f",
  measurementId: "G-DT3JBBF0RJ"
  });

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notification = JSON.parse(payload.data.notification);
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
        icon: "images/icons/palmmind.png",
        data:notification.click_action,
    };
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  console.log("click",event.notification.data);
  clients.openWindow(event.notification.data,"_blank");
}, false);