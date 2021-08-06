
function Room()
{
    user = document.getElementById("user").value ;
    localStorage.setItem("User Name",user)  
    window.location = "kwitter_room.html"
}