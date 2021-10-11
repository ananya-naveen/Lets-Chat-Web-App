function store(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("UserName",username);
    window.location="Kwitter_room.html";
}