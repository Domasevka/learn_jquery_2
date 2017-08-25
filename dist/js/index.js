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


        var custom_message = "<div class=\"alert alert-primary\" role=\"alert\"><p>" + str + "</p><span>" + localdate + "</span></div>";
        $("div.messages-list").append(custom_message);

        $( "form" ).submit(function( event ) {
            event.preventDefault();
        });

       $( '#auth' ).each(function(){
           this.reset();
       });

    });
});


