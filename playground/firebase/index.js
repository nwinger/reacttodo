import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBQD3479_L5vQmR5O6amIbKCc6PH3G--Lo",
  authDomain: "nwi-todo-app.firebaseapp.com",
  databaseURL: "https://nwi-todo-app.firebaseio.com",
  storageBucket: "nwi-todo-app.appspot.com",
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Nicklas',
    age: 30
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
