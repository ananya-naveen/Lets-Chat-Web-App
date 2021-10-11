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

function logout(){
    localStorage.removeItem("UserName");
    localStorage.removeItem("RoomName");
    window.location="index.html";
}
User_name=localStorage.getItem("UserName");
room_name=localStorage.getItem("RoomName");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: User_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
button_tag="<button class='btn button' id="+firebase_message_id+" value="+like+" onclick='update_likes(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_tag+message_tag+button_tag+span_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function update_likes(message_id){
      console.log("Clicked on like button- "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}