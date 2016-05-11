(function($) {
  /**
   * Hover first item in news list
   */
  Drupal.behaviors.hover_list_news_item = {
    attach: function(context, settings) {
      var text_element_height;
      $('.news-list-item:first-child', context).mouseenter(function() {
        text_element_height = $(this).outerHeight() - $(this).find('.news-text').outerHeight();
        console.log(text_element_height);
        $(this).find('.news-list-content').height(text_element_height);
      });
      $('.news-list-item:first-child', context).mouseleave(function() {
        $(this).find('.news-list-content').height(0);
      });
    }
  };
})(jQuery);