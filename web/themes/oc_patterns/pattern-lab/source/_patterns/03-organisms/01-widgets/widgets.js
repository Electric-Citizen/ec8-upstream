(function ($) {

	Drupal.behaviors.widgetAnchors = {
	  attach: function (context, settings) {
	    $(".widget-anchors", context).once('smoothscroll').each(function(){  
	    	//open in this section
	    	$('h2',this).click(function(){
	    		$('.anchors').toggleClass('expanded');
	    		if($('.anchors').is('.expanded')){
	    			$('.toc-toggle').html('&times;');
	    			$('.anchors').slideDown(200);
	    			$('.anchors').attr('aria-expanded', 'true');
	    		}else{
	    			$('.toc-toggle').html('&#9776');
	    			$('.anchors').slideUp(200);
	    			$('.anchors').attr('aria-expanded', 'false');
	    		}
	    	});

	    	//scroll to anchors
	    	$('a', this).click(function(){
	    		var anchor = $(this).attr('href');
	    		$('.anchors').slideUp(200).removeClass('expanded');
	    		$('.anchors').attr('aria-expanded', 'false');
	    		$('.toc-toggle').html('&#9776');
	    		$('html, body').animate({
                scrollTop: $(anchor).offset().top - 100
            });
	    	});

	   });
	  }
	};

})(jQuery);