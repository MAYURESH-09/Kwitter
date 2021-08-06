
var firebaseConfig = {
      apiKey: "AIzaSyCQU7JUdd__KU6AmV8Os0G-fDP8yTgsVZw",
      authDomain: "kwitter-2ae24.firebaseapp.com",
      databaseURL: "https://kwitter-2ae24-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ae24",
      storageBucket: "kwitter-2ae24.appspot.com",
      messagingSenderId: "286463582489",
      appId: "1:286463582489:web:938d2bbdaac7420f95e588"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function Show()
{
      name_user = localStorage.getItem("User Name")
      name_of_user =  document.getElementById("User_name").innerHTML = "Welcome , " + name_user 
      console.log(name_of_user)
}

function AddRoom()
{
      room_name = document.getElementById("Room_name").value 
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });
      localStorage.setItem("Room Name is",room_name)
      window.location = "kwitter_page.html"
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names)
      row = "<div id ="+Room_names+" class= 'room' onclick='redirectTo(this.id)'>#"+ Room_names + "</div> <hr>"
      document.getElementById("output").innerHTML += row

      });});}
getData();

function redirectTo(name)
{
      console.log(name)
      localStorage.setItem("Name is",name)
      window.location = "kwitter_page.html"
}

function Reset()
{
      localStorage.removeItem("User Name")
      localStorage.removeItem("Room Name is")
      window.location = "index.html"
}
