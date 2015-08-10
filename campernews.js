var CamperNews = function() {
  var self = this;
 
  $.getJSON("http://www.freecodecamp.com/stories/hotStories", function(data) {
    $(".container-fluid").show();
    self.data = ko.observableArray(data);
    ko.applyBindings(self);
    self.setupGrid();
  });
}
CamperNews.prototype.setupGrid = function() {
  var $mas_container = $('.masonry-container');
  $mas_container.imagesLoaded(function() {
    $mas_container.masonry({
      columnWidth: '.item',
      itemSelector: '.item'
    });
  });
}
$(document).ready(function() {
  camperNews = new CamperNews();
});
