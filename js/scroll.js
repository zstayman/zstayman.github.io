// Scroll Animation
// ======================================

// This a function I made to grab the id of an achor tag and animate scrolling to it.

function scrollToSection(id){
  var section = $("div" + id);
  $('body').animate({scrollTop: section.offset().top},'slow');
};

// This is how I find the relevant element to scroll on based on the menu item I click.

$(".link").click(function() {
  var linkID = $(this).attr('href');
  debugger;
  scrollToSection(linkID);
});
