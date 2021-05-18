$(document).ready(function () {
    show_users();
});
function show_users(){
    $.ajax({
        meyhod : 'GET',
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (response) {
            response.forEach(function(temp) {
                // console.log(temp.name);
                $('#t_body').append("<tr><td>"+temp.name+"</td><td>"+temp.email+"</td></tr>");
            });
        }
    });
}