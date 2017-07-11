(function($, Drupal) {
Drupal.behaviors.superColumns = {
  	attach: function (context, settings) {
  	 	$("#superfish-main", context).once('justify').each(function(){  
  	 		$('a.justify', this).closest('li.menuparent').addClass('justification');
  		});

  	}
}

Drupal.behaviors.removeEmpty = {
  	attach: function (context, settings) {
  	 	$("#superfish-main", context).once('removeEmpty').each(function(){  
  	 		$(document).ready(function(){
  	 			$('ul.sf-hidden', this).each(function(){
  	 				if(!$('li', this).length){
  	 					$(this).closest('li').removeClass('menuparent');
  	 					$(this).siblings('a').removeClass('menuparent');
  	 					$(this).remove();
  	 				}
  	 			});
  	 		});
  		});
  	}
}

})(jQuery, Drupal);