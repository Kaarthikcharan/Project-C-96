var firebaseConfig = {
    apiKey: "AIzaSyAbIlq2d5UeqDhIwyBNCGt3FEAKSur13Go",
    authDomain: "project-c-94-97c82.firebaseapp.com",
    databaseURL: "https://project-c-94-97c82-default-rtdb.firebaseio.com",
    projectId: "project-c-94-97c82",
    storageBucket: "project-c-94-97c82.appspot.com",
    messagingSenderId: "1038759531692",
    appId: "1:1038759531692:web:eb4db1407106acc10b3b09",
    measurementId: "G-S88MDKBYKJ"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  });}
getData();           
var room_name=localStorage.getItem(room_name);
var user_name=localStorage.getItem(user_name);
function logout(){
      localStorage.removeItem("sign_up");
      localStorage.removeItem("room_name");
      window.location="index.html";
}  
function send(){
      msg=document.getElementById("msg").value;
      console.log(msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}