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
