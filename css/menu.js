
/*array={}
log = (valueName, value) ->
  array = valueName :  value
  $('.mi-status').clone()
  $('.mi-status').html("")
  for element of array
    $('.mi-status').append(element+": "+array[element]+'<br>')
  return
 */
var footerGray, footerGreen, footerbtnaudit;

footerbtnaudit = $('#footerbtnaudit');

footerGreen = $('#footerGreen');

footerGray = $('#footerGray');

$(window).scroll(function() {
  var destination, footerGrayYoffset, ifmobile, ifscrolldown, ifscrollup, scrollPos;
  ifmobile = $(document).width() <= 768;
  scrollPos = $(window).scrollTop() + $(window).height();
  footerGrayYoffset = footerGreen.offset().top + footerGreen.height();
  destination = footerGray.offset().top + footerGray.height();

  /*   log("scrollPos",scrollPos);
      log("footerGrayYoffset",footerGrayYoffset);
   */
  ifscrolldown = function() {
    if (footerGray.css('display') === 'none') {
      footerGray.slideDown();
      $('body,html').animate({
        scrollTop: destination
      }, 400);
      setTimeout((function() {
        footerbtnaudit.css('visibility', 'visible').animate({
          top: '-100',
          opacity: 1
        }, {
          queue: false
        }, 50);
      }), 500);
    }
  };
  ifscrollup = function() {
    footerGray.slideUp();
    footerbtnaudit.animate({
      top: '-150',
      opacity: 0
    }, {
      queue: false
    }, 20);
  };
  if (scrollPos + 1 >= footerGrayYoffset) {
    setTimeout(ifscrolldown, 200);
  } else if (scrollPos < footerGrayYoffset & !ifmobile) {
    ifscrollup();
  }
  if (ifmobile) {
    footerGray.slideDown();
  }
});

//# sourceMappingURL=menu.map