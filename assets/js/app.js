$(document).ready(function () {

  $('.bannerSlider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: true,
    speed: 1000
  });

 $('.bannerSlider2').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  prevArrow: '.leftArrow',
  nextArrow: '.rightArrow'
});



  $('.pslider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '.leftArrow',
    nextArrow: '.rightArrow',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});
