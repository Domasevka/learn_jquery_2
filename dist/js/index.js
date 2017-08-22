"use strict";
$(document).ready( function(){	

    $("#add").click(function(e) {
        e.preventDefault();
        alert("Form submitted");
    });
	
	$(function() {
		
    $("#submitForm").validate();

    $("#submitForm").submit(function(){                       
        if ($("#submitForm").valid()){
            $.post("/create/post/",
                   {'data':$('#mytextarea').val()},
                   function(data){
                       console.log(data);
                       alert(data);
                   });
        }
        return false;
    });
 })

});