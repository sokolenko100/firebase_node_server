const firebase = require("firebase-admin");
 
const serviceAccount = require('./realpro.json');

// How to get token from device:
//  messaging().getToken()
//     .then((refreshedToken) => {
//         console.log('Token refreshed.', refreshedToken);
//     })
//     .catch((err) => {
//         console.log('Unable to retrieve refreshed token ', err);
//     });

// The Firebase token of the device which will get the notification
// It can be a string or an array of strings
const registrationTokens = [
'dvGvu_fbRz6iFvG7jHMLqH:APA91bHQqWqRu7zAqukavpnM-cOFOI3mqkGKbve0gMuk9OliPUlex0v00KX4kH85xrxd_RMlioCAV7klyaBw616YNXUiIW_fDF22y2MMV02SwYRHwk-Z8bbEJAzIqxnzFX2u_6oyKwD0',
'fIzTpadCQXQ:APA91bF3zAJWI35dMQ8k4tSy75fVlm6oarHrB9lxMRaGNpIrOmkMC3iNWjtoSUCHhsq9efd3to9xe8X6iU3A5vz21y9TDyXyMsXbJuZx_3kHp3q9VDSnV4OGp1FEUGh9WCbJUuW45Bd0',
'cPd3BnLgI09VjANg24f7Kf:APA91bF0-E-2ugPRSV4XdUOZMewI0qdZzp3iEcPZ4gEaVM17rPfc3qag14sSXglVXH7xHDrw0AmpjzGy9GAsfGx34AU2Xpe30Ugx5MaGtqt7SZTcf4PKyt9aZ2pYUdwjCuA1MoMBqldk',
'eTA4GTPVvkvEvyoDWKXuyR:APA91bGxJldyDpRfAXP5q8q1OcQv0jhreaKLhoB_hbPuef_-VVXYijRQd_WThwuHOJPi9HUz10Ef8mt-PWrS9TyzeMcxaFO796NKyrQ2slhqNkKIVIdDSt3b6rhAzRo3He-JhtuyjtD4',
];


const firebaseToken = "dBPVo5w8ZEqsnj8YdTAEmb:APA91bHZRPad0gbwkWPE2GVu7-22Egq04IGSL7T2xJrsbc--BzfOduqPlp-AukTYeIKS0mpy5-_GHiYObsfZnYlxHpLPElsDMnhtmurvzoAV7WnrbJ7gSYm5zJYmwUST_jkFqbnUFaD8";
// const firebaseToken = 'dvGvu_fbRz6iFvG7jHMLqH:APA91bHQqWqRu7zAqukavpnM-cOFOI3mqkGKbve0gMuk9OliPUlex0v00KX4kH85xrxd_RMlioCAV7klyaBw616YNXUiIW_fDF22y2MMV02SwYRHwk-Z8bbEJAzIqxnzFX2u_6oyKwD0';

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://realpro-2d743.firebaseio.com"
});

const payload = {
  // notification: {
  //   title: 'Hello!',
  //   body: 'This is notification test for ios',
  //   sound: 'default',
  // },
  data: {   
    contentAvailable: "true",
    title: 'Hello!',
  body: 'This is notification test for ios',
  sound: 'default',}
};

const options = {
  priority: 'high',
  timeToLive: 60 * 60 * 24, // 1 day
  // collapseKey: 'com.training.elevate',
  // from: '55934603024',
  content_available: true,  contentAvailable: true,
};

const message = {
  notification: {
    title: 'Test Notification',
    body: 'Test message'
  },
  data: {
    data1: 'Some data'
  },
  android: {
    notification: {
      sound: 'default',
    }
  },
  apns: {
    payload: {
      aps: {
        sound: 'default',
        "content-available": 1
      }
    },
    headers:{
      "apns-priority":"5"
    }
  },
  token: firebaseToken
};

// firebase.messaging().sendToDevice(registrationTokens, payload, options).then( response => {

//   console.log("response", response);
//  })
//  .catch( error => {
//      console.log(error);
//  });


firebase.messaging().sendToDevice(firebaseToken, payload, options).then( response => {

  console.log("response", response);
 })
 .catch( error => {
     console.log(error);
 });

// firebase.messaging().send(message).then( response => {

//     console.log("response", response);
//    })
//    .catch( error => {
//        console.log(error);
//    });
