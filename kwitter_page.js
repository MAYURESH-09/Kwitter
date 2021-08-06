var firebaseConfig = {
      apiKey: "AIzaSyCQU7JUdd__KU6AmV8Os0G-fDP8yTgsVZw",
      authDomain: "kwitter-2ae24.firebaseapp.com",
      databaseURL: "https://kwitter-2ae24-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ae24",
      storageBucket: "kwitter-2ae24.appspot.com",
      messagingSenderId: "286463582489",
      appId: "1:286463582489:web:a6e4737522afe42695e588"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("User Name")
room_name = localStorage.getItem("Room Name is")

function Send_1()
{
      message = document.getElementById("msg_1").value
      console.log(message)
      firebase.database().ref(room_name).push({
            name: user_name,
            message : message,
            like: 0
      });
      document.getElementById("msg_1").innerHTML = "" ;
}





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id)
      console.log(message_data)
      User = message_data['name']
      Message = message_data['message']
      Like = message_data['like']
      name_tag = "<h4>"+User+"<img src='tick.png' class='user_tick'></h4>"
      message_tag = "<h4>"+Message+"</h4>"
      like_count = "<button class='btn btn-success' id="+firebase_message_id+" value= "+Like+" onclick = 'updateLike(this.id)'>";
      like_text = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+Like+"</span></button> <hr>"

      row = name_tag+message_tag+like_count+like_text ;
      document.getElementById("output").innerHTML += row
      
      
//End code
      } });  }); }
getData();


function updateLike(message_id)
{
      console.log(message_id)
      buttonId = message_id

      likes = document.getElementById(buttonId).value
      update_Like = Number(likes) + 1
      console.log(update_Like)

      firebase.database().ref(room_name).child(message_id).update({
            like:update_Like
      });
}

function Logout()
{
      localStorage.removeItem("User Name")
      localStorage.removeItem("Room Name is")
      window.replace("index.html")
}