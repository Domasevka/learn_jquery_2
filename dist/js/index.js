"use strict";

$(document).ready(function () {
    //by click on input starting a function
    $('input[value="Submit text"]').click(function () {
        //creates a text string in standard URL-encoded notation only from textarea
        var newText = $('textarea.form-control').serialize();
        //creates a date
        var dateNow = new Date();
        var localdate = (dateNow.getMonth() + 1) + '/' + dateNow.getDate() + '/' + dateNow.getFullYear() + ' ' + dateNow.getHours() + ':' + dateNow.getMinutes();
        //taking a date from json file
        jQuery.getJSON("index.json", function (data) {
            //assign a string from json to a variable
            var newDate = data.kakoetoslovo;
            //change a text from .json on text from form
            var changeNewMessage = newDate.replace("__MESSAGE__", newText);
            //change a date from .json on date from localdate
            var changeNewDate = changeNewMessage.replace("__DATE__", localdate);
            //put a new string in div from DOM
            $('div.messages-list').append(changeNewDate);
        });
        //part of .serialize(); property
        $("form").submit(function (event) {
            event.preventDefault();
        });
        //clean text in form after sending
        $('#auth').each(function () {
            this.reset();
        });
    });
});


