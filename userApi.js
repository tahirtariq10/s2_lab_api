$(function() {
    loadUsers();
    $("#users").on("click", ".btn-warning", handleUpdate);

});


function ValidateEmail(mail) 
{
     var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail = prompt("Enter Updated Mail:", "");
    if(mail.match(mailformat))
    {
        alert("Your Email is updated")
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
}


function handleUpdate() {
    if(ValidateEmail()) {        
        var btn = $(this);
        var parentDiv = btn.closest(".recipe");
        let id = parentDiv.attr("data-id");
        $.get("https://jsonplaceholder.typicode.com/albums/" + id, function(response) {
        
        });
    }
  }

function loadUsers() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      error: function(response) {
        var users = $("#users");
        users.html("An Error has occured");
      },
      success: function(response) {
        console.log(response);
        var users = $("#users");
        users.empty();
        for (var i = 0; i < response.length; i++) {
          var us = response[i];
          users.append(
            `<div class="user container" data-id="${us._id}">
            <h3>UserName: ${us.username}</h3>
            <h5>Name: ${us.name}</h5>
            <p>
            <button class="btn btn-warning btn-sm float-right">Update Email</button> 
            Email: ${us.email}</p></div>`
          );
        }
      }
    })
}