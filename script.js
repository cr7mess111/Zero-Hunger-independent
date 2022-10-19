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






function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "room.html"
}