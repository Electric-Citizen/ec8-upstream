(function($, Drupal) {

Drupal.behaviors.accordion = {
  	attach: function (context, settings) {
  	 	$(".paragraph--type--accordion-item", context).once('accordion').each(function(){  
  	 		$('.accordion-header', this).click(function(){
  	 			if($(this).closest('.paragraph--type--accordion-item.accord-active').length){
  	 				$('.accord-active').removeClass('accord-active');
  	 			}else{
  	 				$('.accord-active').removeClass('accord-active');
  	 				$(this).closest('.paragraph--type--accordion-item').addClass('accord-active');
  	 			}
  	 		});	
  		});
  	}
}

Drupal.behaviors.lightbox = {
    attach: function (context, settings) {
      $(".paragraph--type--lightbox-gallery", context).once('lightboxes').each(function(){  
        $(".swipebox", this).swipebox({
          loopAtEnd: true,
          hideBarsDelay : 12000
        });
        $(function(){
          $(document.body)
            .on('click touchend','#swipebox-slider .current img', function(e){
                return false;
            })
            .on('click touchend','#swipebox-slider .current', function(e){
                $('#swipebox-close').trigger('click');
            });
          });
      });
    }
}



})(jQuery, Drupal);