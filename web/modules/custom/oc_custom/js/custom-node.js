(function($, Drupal) {

Drupal.behaviors.admin_bkimage = {
	attach: function (context, settings) {
		$(".field--name-field-oc-widgets", context).once('style').each(function(){  
			$(document).ajaxComplete(function() {
				$('.field--name-field-background-style').each(function(){
					var styler = $(this);
					var chosen = $('select', this).find("option:selected").val();
					if(chosen != 'image'){
						styler.next('.field--name-field-background-image').hide();
					}else{
						styler.next('.field--name-field-background-image').show();
					}
					$(this).find('select').change(function(){
						//alert('changed');
						var choice = $(this).find("option:selected").val();
						if(choice == 'image'){
							styler.next('.field--name-field-background-image').show();
						}else{
							styler.next('.field--name-field-background-image').hide();
						}
					});
				});
			});
		});
	}
};



})(jQuery, Drupal);