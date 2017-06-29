/**
 * Created by huy on 6/29/17.
 */

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=928f5d73b882595665c96c29a84a7c18",
        dataType: "json",
        success: function (jsonResult) {
            //do what ever with the reply
            var users = $(jsonResult).find("main");
            console.log(jsonResult.main.temp);
        },
        error: function () {
            //handle error
            alert("error");
        },
        complete: function() {
            // Schedule the next request when the current one's complete
        }
    });
});

