(function($, Drupal) {
Drupal.behaviors.pageMenu = {
	attach: function (context, settings) {
		$(".block--system-menu.page-menu", context).once('page-menu').each(function(){  
			//need doc ready because active-class script fires after theme scripts
			$(document).ready(function(){
				$('.block--system-menu.page-menu > ul li').each(function(){
					
					//find active links and set the active trail
					$('.is-active', this).parentsUntil('.page-menu').addClass('active-trail expanded');

					//find nested lists and set their parents and expanders
					if(($('> ul', this).length) && (!$('.expander:first', this).length) ){
					  $(this).addClass('parent').prepend('<button class="expander" aria-expanded="false"></button>');
					}


					//find active-trail li and add aria expanded role
					$('li.active-trail > .expander').attr('aria-expanded', "true");
				});

				//set button roles, tab indexes and keypresses on sidebar links
				$('.block--system-menu.page-menu a').each(function(i){
					//find heirarchies in the menu and add a class to each link
					$(this).addClass('level-' + $(this).parents('.page-menu ul').length);
					$(this).attr('tabindex', '0');
					$(this).attr('role', 'button');
					$(this).focusin(function(e){
						$(this).keydown(function(e) {
							if((e.which === 13) && (e.target === this)){  //on enter
								document.location = $('a:first-child', this).attr('href');
							}
						});
					});
				});

				//change expanded class and aria-roles on expander click
				$('.expander').click(function(){
					$(this).closest('li').toggleClass('expanded');
					if($(this).attr('aria-expanded') == 'false'){
						$(this).attr('aria-expanded', "true");
					}else{
						$(this).attr('aria-expanded', "false");
					}
				});
			});

			
		});
	}
}
})(jQuery, Drupal);
