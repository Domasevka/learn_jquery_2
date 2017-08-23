"use strict";
$(document).ready( function(){	


   $('input[value="Submit text"]').click(function() {

        var str = $('textarea:first').serialize();

       $("<p/>").text(str).appendTo($('div.messages_list'));
        $( "form" ).submit(function( event ) {
            event.preventDefault();
        });
    });

    /*function showValues(){

        var str = $( 'form' ).serialize();
         $( 'div.messages_list' ).text( str );
    }

        $( "textarea[name='comment']" ).on( "click", showValues );
        //$( 'input[value="Submit text"]' ).on( "click", showValues );
        $( "textarea" ).on( "change", showValues );
    showValues();*/

})