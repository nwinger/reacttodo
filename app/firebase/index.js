import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQD3479_L5vQmR5O6amIbKCc6PH3G--Lo",
    authDomain: "nwi-todo-app.firebaseapp.com",
    databaseURL: "https://nwi-todo-app.firebaseio.com",
    storageBucket: "nwi-todo-app.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
