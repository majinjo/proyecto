$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: "json",

        success: function (data) {
            $.each(data, function(i,item){
                var row = "<tr >" + 
                            "<th scope='row'>" + item.id + "</th>" +
                            "<td>" + item.name + "</td>" +
                            "<td>" + item.address.city + "</td>" +
                            "</tr>";
                $("#tabla>tbody").append(row);
            });
        }, // Fin de la función ajax

    });
});
