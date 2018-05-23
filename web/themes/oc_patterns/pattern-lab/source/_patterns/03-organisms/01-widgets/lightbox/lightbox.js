(function($, Drupal) {

//Swipebox script for lightbox images.
Drupal.behaviors.lightbox = {
	attach: function (context, settings) {
		$(".paragraph--type--lightbox-gallery", context).once('lightboxes').each(function(){  
			$('.featherlight-gal', this).featherlightGallery({
				previousIcon: '<',
				nextIcon: '>',
				galleryFadeIn: 300,
				openSpeed: 300
			});
		});
	}
}


})(jQuery, Drupal);