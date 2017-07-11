(function($, Drupal) {

//search toggle
Drupal.behaviors.searchToggle = {
  	attach: function (context, settings) {
  	 	$("#block-oc-subtheme-search", context).once('tSearch').each(function(){  
        //insert toggle icon
        $(this).prepend('<span class="t-search">Search</span>');
  	 		$('.t-search', this).click(function(){
          $(this).toggleClass('searching');
  	 			$('#search-block-form').toggleClass('slideDown');
  	 		});	
  		});
  	}
}



})(jQuery, Drupal);