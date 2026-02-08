$(document).ready(function () {

  $('.bannerSlider').slick({
    arrows: false,
    autoplay: false,
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
  nextArrow: '.rightArrow',
   responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3,arrows: true }
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



  $('.pslider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '#psLeftArrow',
    nextArrow: '#psRightArrow',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3,arrows: true }
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
 $('.client_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '#Client .clientArrow .prev',
  nextArrow: '#Client .clientArrow .next',
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 }
    }
  ]
});
});
