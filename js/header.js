
/*------------------------- MODAL -------------------- */
var close, modal, okbtn, open_modal, overlay, spasibo;

$('form').submit(function() {
  var th;
  th = $(this);
  $.ajax({
    type: 'POST',
    url: '../php/mail.php',
    data: th.serialize()
  }).done(function() {
    modal.css('visibility', 'hidden').animate({
      opacity: 0,
      top: '45%'
    }, 200);
    setTimeout((function() {
      spasibo.css('visibility', 'visible').animate({
        opacity: 1,
        top: '50%'
      }, 400);
      th.trigger('reset');
      okbtn.click(function() {
        spasibo.css('visibility', 'hidden').animate({
          opacity: 0,
          top: '45%'
        }, 200);
        overlay.fadeOut(400);
      });
    }), 1000);
  });
  return false;
});

overlay = $('#overlay');

open_modal = $('.open_modal');

close = $('.modal_close, #overlay');

modal = $('.modal_div');

spasibo = $('#spasibo');

okbtn = $('.okbtn');

open_modal.click(function(event) {
  var div;
  event.preventDefault();
  div = $(this).attr('data-target');
  overlay.fadeIn(400, function() {
    $(div).css('visibility', 'visible').animate({
      opacity: 1,
      top: '50%'
    }, 200);
  });
});

close.click(function() {
  modal.animate({
    opacity: 0,
    top: '45%'
  }, 200, function() {
    $(this).css('visibility', 'hidden');
    overlay.fadeOut(400);
  });
});


/*------------------------- /MODAL -------------------- */

//# sourceMappingURL=header.map