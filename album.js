$(function() {
    loadAlbums();
    $("#albums").on("click", ".btn-danger", handleDelete);

});

function handleDelete() {
    var btn = $(this);
    var parentDiv = btn.closest(".albums");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/albums/" + id,
      method: "DELETE",
      error: function(response) {
        var albums = $("#albums");
        albums.html("An Error has occured");
      },
      success: function() {
        loadAlbums();
      }
    });
  }

function loadAlbums() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/albums",
      method: "GET",
      error: function(response) {
        var albums = $("#albums");
        albums.html("An Error has occured");
      },
      success: function(response) {
        console.log(response);
        var albums = $("#albums");
        albums.empty();
        for (var i = 0; i < response.length; i++) {
          var alb = response[i];
          albums.append(
            `<div class="albums container" data-id="${alb.id}">
            <h3>${alb.title}</h3>
            <h5>ID: ${alb.id}</h5>
            <p>
            <button class="btn btn-warning btn-sm m-1 float-right">Update Title</button>
            <button class="btn btn-danger btn-sm m-1 float-right">Delete Album</button> 
            UserID: ${alb.userId}</p></div>`
          );
        }
      }
    })
}