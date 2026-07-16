$(function () {
  $(".a-g-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".a-g-why-list-left",
    nextArrow: ".a-g-why-list-right",
  });
});

$(function () {
  $(".a-g-how-list").slick({
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
    prevArrow: ".a-g-how-list-left",
    nextArrow: ".a-g-how-list-right",
  });
});
