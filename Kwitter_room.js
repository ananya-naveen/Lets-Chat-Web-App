var firebaseConfig = {
    apiKey: "AIzaSyCemL9fKmqPAwSCUT8mG0Hbm13ROxgGga4",
    authDomain: "let-s-chat-web-app-82a1d.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-82a1d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-82a1d",
    storageBucket: "let-s-chat-web-app-82a1d.appspot.com",
    messagingSenderId: "643335049688",
    appId: "1:643335049688:web:e72fbf322e33898f1862ad",
    measurementId: "G-93S3LWB120"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML="Welcome "+username+"!!";
function addRoom(){
      Room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "Adding Room"
      });
      localStorage.setItem("RoomName", Room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("RoomName", name);
      window.location="Kwitter_page.html";
}

function logout(){
      localStorage.removeItem("UserName");
      localStorage.removeItem("RoomName");
      window.location="index.html";
}