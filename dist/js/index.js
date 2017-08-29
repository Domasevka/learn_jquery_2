"use strict";

$(document).ready(function () {
    //by click on input starting a function
    $('input[value="Submit text"]').click(function () {
        //creates a text string in standard URL-encoded notation only from textarea
        var newText = $('textarea.form-control').serialize();
        //creates a date
        var dateNow = new Date();
        var localdate = (dateNow.getMonth() + 1) + '/' + dateNow.getDate() + '/' + dateNow.getFullYear() + ' ' + dateNow.getHours() + ':' + dateNow.getMinutes();
        //putting a date in span
        $('span.messages-list__date').text(localdate);
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

/*var message = $("<p/>")
 .addClass('alert alert-primary')
 .text(str);
 .appendTo($('div.messages-list'));

 var now = $("<span/>")
 .addClass('messages-list__date')
 .appendTo($('p.alert alert-primary'));*/

/*$(function() {

 $.getJSON( "ajax/test.json", function( data ) {
 console.log(data);


 if (data && data.title && data.answers) {
 var title  = $('<h4>').html(data.title).addClass('question-block__name');
 $('.question-block').append(title);

 var items = [];
 $.each( data.answers, function( key, val ) {
 items.push( "<li class='ellipse__item'>" + val + "</li>" );
 });

 $( "<ul/>", {
 "class": "ellipse",
 html: items.join( "" )
 }).appendTo( ".question-block" );
 }
 });

 });*/
