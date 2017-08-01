/* Example Behavior */
// Drupal.behaviors.example = {
//   attach: function (context, settings) {
//     $(".something", context).once('exampleSomething').each(function(){  
//       scripts go here
//     });
//   }
// };


(function($, Drupal) {

/* RESPONSIVE TABLES WITH STACKTABLE
------------------------------------ */
Drupal.behaviors.stackTable = {
  attach: function (context, settings) {
    $('.layout-container table', context).once('responsive_table').each(function(){
        $(this).cardtable({myClass:'responsive-table'});
        $(document).ajaxComplete(function() {
            $('.layout-container table').cardtable({myClass:'responsive-table'});
        });
    });
  }
};

/* SUPERFISH SCRIPTS
---------------------- */	
Drupal.behaviors.superColumns = {
  	attach: function (context, settings) {
  	 	$("#superfish-main", context).once('justify').each(function(){  
  	 		$('a.justify', this).closest('li.menuparent').addClass('justification');
        $('a.three-column', this).closest('li.menuparent').addClass('three-column');
        $('a.two-column', this).closest('li.menuparent').addClass('three-column');
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
//////// end superfish /////////

/* FIXED FOOTER
---------------------- */
Drupal.behaviors.sticky_footer = {
  attach: function(context, settings) {
    $('body:not(.logged-in) .footer-inner.fixed', context).once('isFixed').each(function(){
        $(window).load(myfunction);
          $(window).resize(myfunction);
          function myfunction(){
            var windowW = $(window).width();
            var windowH = $(window).height();
            var minHeight = windowH - $('footer').height();
            //$('#wrapper').css('min-height', minHeight + 'px');
            //run position check if width is tab or greater
            if(windowW > 760){
              checkOffset();
            //  $('#footer-wrapper').hide(0);
              $(document).scroll(function() {
              //  $('#footer-wrapper').slideDown(200);
                 checkOffset();
              });

              //position check
              function checkOffset() {
                //check the offset of the bottom of the fixed item against the offest of the top of the bottom page wrapper
                if($('.footer-inner').offset().top + $('.footer-inner').outerHeight()
                                           >= $('footer').offset().top - 10)
                  //set to relative if the bottom of the fixed element crosses into bottom page wrapper
                  $('.footer-inner').removeClass('isFixed');
                //reset to fixed when it crosses back out
                if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
                    $('.footer-inner').addClass('isFixed');
              }
            }//end widown > 760 if
          };//end lodd /resize
    });
  }
}; /////end fixed footer //////

})(jQuery, Drupal);

(function ($) {
//header-background
Drupal.behaviors.bannerBackground = {
  attach: function (context, settings) {
    $(".field-use-as-background", context).once('bannerBackground').each(function(){  
      if($(this).text() == 'Background'){
        $( '.block-region-top' ).addClass('background');
      }
      $(this).remove();
    });
  }
};
})(jQuery);
(function($, Drupal) {
//search toggle
Drupal.behaviors.searchToggle = {
	attach: function (context, settings) {
	 	$(".block-search-form-block").once('tSearch').each(function(){  
	 	$('.t-search', this).click(function(){
        	$(this).toggleClass('searching');
	 			$('#search-block-form').toggleClass('slideDown');
	 		});	
		});
	}
}
})(jQuery, Drupal);

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
            $(this).addClass('parent').prepend('<span class="expander" aria-expanded="false"></span>');
          }

          //find active-trail li and add aria expanded role
          $('li.active-trail > .expander').attr('aria-expanded', "true");
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

	 		var menu_page = $('.block--system-menu.page-menu');
	 		var menu = $('.block--system-menu.page-menu > ul');

	 		//add a select list to the page menu for mobile
      $(window).on('resize',  _.debounce( pageMenuMobile, 100 )).trigger('resize');

      function pageMenuMobile(){
          var wwidth = $(window).width();
          
          //if we're at tablet or less
          if ((wwidth < 760) || ($('.node:not(.pl-spacer) .kermit').length)){

            //insert a select list if it doesn't already exist
            if(!$('.block--system-menu.page-menu select').length){
              $('<select />').appendTo('.block--system-menu.page-menu');

              //add a default first option to that select list
              $('<option />', {
                "value"   : "#",
                "text"    : "Go to Another Page"
              }).prependTo('.block--system-menu.page-menu select');


              // Populate the rest of the dropdown with menu items
              $('.block--system-menu.page-menu a').each(function() {
                var el = $(this);
                $('<option />', {
                  "value"   : el.attr("href"),
                  "text"    : el.text()
                }).appendTo('.block--system-menu.page-menu select');
              });

              //run select2 on page menu
              if(!$('.block--system-menu.page-menu .select2-container').length){
                $('.block--system-menu.page-menu select').select2();
              }

              //jump to the page when an item is selected
              $('.block--system-menu.page-menu').find('select').change(function() {
                window.location = $(this).find('option:selected').val();
              });

              //detach the page menu wrapper
              $('.block--system-menu.page-menu > ul').detach();

              
              
            }

          }else{
            //if we're on desktop, remove the select list and reattach the menu block wrapper if its not already there
            $('.block--system-menu.page-menu:not(.preserve)').find('select').remove();
            $('.block--system-menu.page-menu:not(.preserve)').find('.select2').remove();
            if(!$('.block--system-menu.page-menu > ul').length){
              $('.block--system-menu.page-menu').append(menu);
            }
          }
        }//end pageMenuMobile

 		});
	}
}
})(jQuery, Drupal);

(function($, Drupal) {

Drupal.behaviors.accordion = {
  	attach: function (context, settings) {
  	 	$(".accordion-item", context).once('accordion').each(function(){  
  	 		$('.accordion-header', this).click(function(){
  	 			if($(this).parent('.accordion-item.accord-active').length){
  	 				$('.accord-active').removeClass('accord-active').attr('aria-expanded', "false");;
  	 			}else{
  	 				$('.accord-active').removeClass('accord-active').attr('aria-expanded', "false");;
  	 				$(this).parent('.accordion-item').addClass('accord-active').attr('aria-expanded', "true");;
  	 			}
  	 		});	
  		});
  	}
}

})(jQuery, Drupal);
(function($, Drupal) {

//Slideup animation for cta content when on a background
Drupal.behaviors.ctaSlide = {
    attach: function (context, settings) {
      $(".paragraph--type--call-to-action > .widget-color,.paragraph--type--call-to-action > .image", context).once('contentSlide').each(function(){  
        
      //animate when the page scrolls down far enough
      $(window).load(function(){
        
        $(document).scroll(function() {
            randomEntrance();
        });
        function randomEntrance() {
          $('.paragraph--type--call-to-action > .widget-color,.paragraph--type--call-to-action > .image').each(function(){
            if($(document).scrollTop() + window.innerHeight > $(this).offset().top + 50)
            $(this).addClass('slideUp');
          });
        }
      });

      });
    }
}


})(jQuery, Drupal);
(function($, Drupal) {

//Swipebox script for lightbox images.
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

//Fade-in class for lightboxes when in viewframe.
Drupal.behaviors.galleryFadeIn = {
  attach: function (context, settings) {
      $(".paragraph--type--lightbox-gallery", context).once('randomBoxes').each(function(){

      //animate when the page scrolls down far enough
      $(window).load(function(){
        
        $(document).scroll(function() {
            randomEntrance();
        });
        function randomEntrance() {
          $('.paragraph--type--lightbox-gallery').each(function(){
            if($(document).scrollTop() + window.innerHeight > $(this).offset().top + 50)
            $('.media-image.view-mode-large-thumb', this).addClass('randomEntrance');
          });
        }
      });
    });
  }
}

})(jQuery, Drupal);
(function($, Drupal) {

Drupal.behaviors.revealWidget = {
  attach: function (context, settings) {
    $(".paragraph--type--reveal-group", context).once('reveal-it').each(function(){  
    	//add a class to kermit to let it know that it has reveal
        $('.kermit').addClass('hasReveal');

        //set intial reveal section classes 
        $('.field-reveal-sections > div:nth-of-type(1)').addClass('prep');
        $('.field-reveal-sections > div:nth-of-type(2)').addClass('fixed');
        $('.field-reveal-sections > div:nth-of-type(3)').addClass('next');

        $(window).scroll(function(){
        	//define the top and bottom of the screen
            var bottom_screen = $(window).scrollTop() + $(window).height();
            var top_screen = $(window).scrollTop();

            //find the first or previous reveal section
            $('.prep').each(function(){
            	//find the bottom of the section
                var bottom_prep = $(this).offset().top + $(this).height();
                //detect when the bottom of the section goes off screen
                if(bottom_prep < top_screen){
                  //$('.past').removeClass('past');

                  //leapfrog classes to make next section live and this one not
                  $(this).removeClass('prep').addClass('past');
                  $('.fixed').removeClass('fixed').addClass('prep');
                  $('.next').removeClass('next').addClass('fixed');
                  $('.fixed').next().addClass('next');
                }
            });
            //find each previous section
            $('.past').each(function(){
            	//find the bottom of the section
                var bottom_prep = $(this).offset().top + $(this).height();
                //detect if the bottom is scrolled back into view
                if(bottom_prep > top_screen){
                  //clean out all classes and reverse leap frog for scrolling back up the page
                  $('.field-reveal-sections > div').removeClass('prep fixed next');
                  $(this).next().addClass('fixed');
                  $('.fixed').next().addClass('next');
                  $(this).removeClass('past').addClass('prep');
                }
            }); 
        });
    });
  }
}


})(jQuery, Drupal);
(function($, Drupal) {
/* distinguish video from other oc media */
Drupal.behaviors.ocMediaEmbedded = {
  attach: function (context, settings) {
    $('.oc-media .field-media-video-embed-field', context).once('isVideo').each(function(){  
      $(this).closest('.oc-media').addClass('has-video');
    });
  }
};
})(jQuery, Drupal);
