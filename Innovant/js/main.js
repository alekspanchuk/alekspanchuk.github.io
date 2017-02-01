$().ready(function(){

// MENU
  var menu = $('.hamburger__menu_list');
  // show
    $('.header__hamburger').on('click', function(event) {
      menu.show();
    });
  // hide on click out of menu
    $(document).mouseup(function (e) {
      if (menu.has(e.target).length === 0){
          menu.hide();
      }
    });
  // Smooth transition
    // for top menu
    $(".hamburger__menu_item").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        menu.hide();
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 700 мс
        $('body,html').animate({scrollTop: top}, 700);
    });
    // for hamburger menu
    $(".header__menu_item").on("click","a", function (event) {
        event.preventDefault();
        menu.hide();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
// ABOUT
    $(".content__button").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
// 
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
// WOW
  new WOW().init();

});
