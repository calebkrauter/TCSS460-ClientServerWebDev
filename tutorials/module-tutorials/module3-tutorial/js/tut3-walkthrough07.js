/* put your handling code here */
$(function() {
    $("#consume").click(function() {
        var url = "http://faculty.washington.edu/ealmasri/cities.php";
        $.get(url, function (data, status) {
        var list = "";
    // loop through JSON data and add each city to list
        for (var i=0; i < data.length; i++) {
            list += data[i].name + "<br>";
            }
                $("#results").html(list);
            });
        });
});
