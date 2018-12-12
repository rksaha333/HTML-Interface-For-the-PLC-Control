	$(document).bind("mobileinit", function(){
      	$.mobile.defaultPageTransition = 'slide';
	});

$(document).bind('mobileinit',function(){
   $.mobile.selectmenu.prototype.options.nativeMenu = false;
});
	function sent(c){
        		$.ajax({
                		type: "POST",
               			url: " ",
                		data: $(c).parents("form").serialize(), // serializes the form's elements.
                		success: function(){ console.log("done"); }
        		});
		}
