var imageBox = $('.project__gif')
var image = $('.project__gif--static');
var gif = $('.project__gif--moving');

function switchImages() {
  if (image.is(':visible')) {
    image.addClass("is-hidden");
    gif.removeClass("is-hidden");
  }
  else {
    gif.addClass('is-hidden');
    image.removeClass('is-hidden');
  }
}

imageBox.on('click', switchImages);
