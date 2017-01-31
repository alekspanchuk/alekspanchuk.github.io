$(document).ready(function(){
// ABOUT HEIGHT DEFINE
  console.log('Hello world');
  
  

// FEEDBACK SLIDERS
  $('.fback__slider').slick({
  	infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    vertical: true,
    arrows: false,
    dots: true,
    dotsClass: 'fback__dots-item',
    appendDots: '.fback__dots',
    asNavFor: '.fback__fake-slider'
  });
  $('.fback__fake-slider').slick({
  	infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
    dots: true,
    dotsClass: 'people__img',
    appendDots: '.fback__people',
    asNavFor: '.fback__slider'
  });
// BLOG SLIDER
  $('.blog__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: $('.slider__next-button'),
    prevArrow: $('.slider__prev-button'),
    responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]

  });

});
