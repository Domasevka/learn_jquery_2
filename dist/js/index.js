"use strict";

$(document).ready( function(){


   $('input[value="Submit text"]').click(function() {

        var str = $('textarea.form-control').serialize();

        /*var message = $("<p/>")
            .addClass('alert alert-primary')
            .text(str);
            .appendTo($('div.messages-list'));

        var now = $("<span/>")
            .addClass('messages-list__date')
            .appendTo($('p.alert alert-primary'));*/

         var dNow = new Date();
         var localdate = (dNow.getMonth()+1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
         $('span.messages-list__date').text(localdate);

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

       /* var custom_message = "<div class=\"alert alert-primary\" role=\"alert\"><p>" + str + "</p><span>" + localdate + "</span></div>";
        $("div.messages-list").append(custom_message);*/

        $( "form" ).submit(function( event ) {
            event.preventDefault();
        });

       $( '#auth' ).each(function(){
           this.reset();
       });

    });
});

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
