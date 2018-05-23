(function($, Drupal) {

Drupal.behaviors.accordion = {
	attach: function (context, settings) {
		$(".accordion-item", context).once('accordion').each(function(){  
  	 		//open and shut accordions on click
        $('.accordion-header', this).click(function(e){
          e.preventDefault();
          if($(this).parent('.accordion-item.accord-active').length){
            $('.accord-active').removeClass('accord-active').attr('aria-expanded', "false");
            $(this).next().slideUp(500);
          }else{
            $('.accord-active').find('.field-oc-long-text').slideUp(500).end().removeClass('accord-active').attr('aria-expanded', 'false');
            $(this).parent('.accordion-item').addClass('accord-active').attr('aria-expanded', "true").end().next().slideDown(500);
          }
        }); 
		});
	}
}

})(jQuery, Drupal);