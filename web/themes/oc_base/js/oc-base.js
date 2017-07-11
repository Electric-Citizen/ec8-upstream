(function($, Drupal) {


/* FEATURED IMAGE AS HEADER BACKGROUND */
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


})(jQuery, Drupal);