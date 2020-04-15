$(document).ready(function () {

    $("#boton").click(function () {
        param = document.querySelector("#ID").value;
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/comments?",
            type: "GET",
            data: `postId=${param}`,
            success: function (data) {
                for (const i in data) {
                    $('#contenido').append(`Name: ${data[i].name} <br/> ID: ${data[i].id} <br/> Email: ${data[i].email} <br/> Body: ${data[i].body} <br/>`);
                }
            }
        });
    });
});