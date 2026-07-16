$(function () {
  $(".a-h-how-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".a-h-how-list-left",
    nextArrow: ".a-h-how-list-right",
  });
});
$(function () {
  $(".a-h-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".a-h-features-list-left",
    nextArrow: ".a-h-features-list-right",
  });
});
