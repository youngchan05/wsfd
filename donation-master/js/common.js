var header = $(".headerWrapper");
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > header.height()) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
});

$(".menu").on("click", function () {
  console.log(123);
  $(".gnb").toggleClass("active");
  $(this).toggleClass("active");
});
