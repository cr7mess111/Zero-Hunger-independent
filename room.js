var firebaseConfig = {
    apiKey: "AIzaSyA_WNilVLnGr9IV4R7Zqc21rzkdjPKiKro",
    authDomain: "project---97---zero-hunger.firebaseapp.com",
    databaseURL: "https://project---97---zero-hunger-default-rtdb.firebaseio.com",
    projectId: "project---97---zero-hunger",
    storageBucket: "project---97---zero-hunger.appspot.com",
    messagingSenderId: "396504537074",
    appId: "1:396504537074:web:057cd57251012cbb8dbd6b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "hunger_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_name);
   row = "<div class = 'room name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "index.html"
}