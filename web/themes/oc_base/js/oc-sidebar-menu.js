(function($, Drupal) {
Drupal.behaviors.justification = {
  	attach: function (context, settings) {
  	 	$(".block-region-sidebar .block--system-menu > ul", context).once('page-menu').each(function(){  
  	 		//need doc ready because active-class script fires after theme scripts
        $(document).ready(function(){
          $('.block-region-sidebar .block--system-menu > ul li').each(function(){
            
            $('.is-active', this).parentsUntil('.block-region-sidebar').addClass('active-trail expanded');
        
            if($('> ul', this).length){
              $(this).addClass('parent').prepend('<span class="expander"></span>');
            }
          });
          $('.expander').click(function(){
            $(this).closest('li').toggleClass('expanded');
          });
        });

  	 		var menu_page = $('.block-region-sidebar .block--system-menu');
  	 		var menu = $('.block-region-sidebar .block--system-menu > ul');

  	 		//add a select list to the page menu for mobile
        $(window).on('resize',  _.debounce( pageMenuMobile, 100 )).trigger('resize');

        function pageMenuMobile(){
          var wwidth = $(window).width();
          
          //if we're at tablet or less
          if (wwidth < 760) {

            //insert a select list if it doesn't already exist
            if(!$('select', menu_page).length){
              $('<select />').appendTo(menu_page);

              //add a default first option to that select list
              $('<option />', {
                "value"   : "#",
                "text"    : "Select a Page"
              }).prependTo('select', menu_page);


              // Populate the rest of the dropdown with menu items
              $('a', menu_page).each(function() {
                var el = $(this);
                $('<option />', {
                  "value"   : el.attr("href"),
                  "text"    : el.text()
                }).appendTo('select', menu_page);
              });

              //add an indicator to the end of the select list
              $('select', menu_page).after('<span class="open-toggler"></span>');

  

              //jump to the page when an item is selected
              $(menu_page).find('select').change(function() {
                window.location = $(this).find('option:selected').val();
              });

              //detach the sidebar menu-wrapper
              menu.detach();
            }

          }else{
            //if we're on desktop, remove the select list and reattach the menu block wrapper if its not already there
            menu_page.find('select').remove();
            if(!$('.block-region-sidebar .block--system-menu > ul').length){
              menu_page.append(menu);
            }
          }
        }//end pageMenuMobile

   		});
  	}
}

})(jQuery, Drupal);