$('.nav .navbar-collapse')
  .on('hide.bs.collapse', function () {
    $('.nav .navbar-collapse').removeClass('color');
  })
  .on('show.bs.collapse', function () {
    $('.nav .navbar-collapse').addClass('color');
  });