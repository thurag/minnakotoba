$(function() {
  // This just increments the delay on each item

  $('.rolldown-list li').each(function () {
    console.log("this is li");
    var delay = ($(this).index()/4) + 's';
    $(this).css({
      webkitAnimationDelay: delay,
      mozAnimationDelay: delay,
      animationDelay: delay
    });
  });


// A button to reload the animation

  $('#btnReload').click(function () {
    console.log("hey");
    $('#myList').removeClass('rolldown-list');
    setTimeout(function () {
      $('#myList').addClass('rolldown-list');
    }, 1)
  });
})