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
// PORTFOLIO FILTER
  $('.works_menu__item').on('click', function(event) {
    event.preventDefault();
    var item = $(this),
        contentItem = $('.works__card_item'),
        itemCategory = $(this).data('category'),
        itemsInRow = 3;
        marginRight = '30px';
        marginRightLast = '0px';
        marginLeft = '0px';
        float = 'left';
        floatLast = 'right';
        windowSize = $(window).width();

    // определяем размер отступа на основании от размера экрана
    if (windowSize > 960 && windowSize <= 1281) {
      marginRight = '15px';
    } else if ( windowSize > 650 && windowSize <= 960 ) {
      itemsInRow = 2;
      marginRight = '15px';
    } else if ( windowSize <= 650 ) {
      itemsInRow = 1;
      marginRightLast = 'auto';
      marginLeft = 'auto';
      floatLast = 'none';
    }

    // помечаем активную ссылку
    item.addClass('active')
        .siblings()
        .removeClass('active');
    // скрываем весь контект
    contentItem.hide();    
    // фильтруем по data-category и показываем
    activeItem = contentItem.filter('.' + itemCategory);        
    activeItem.show();

    // задаем отступы
    for (var i = 0; i < activeItem.length; i++) {
      if ( i % itemsInRow < (itemsInRow - 1) ) {
        activeItem.eq(i).css({
          'margin-right': marginRight,
          'margin-left': marginLeft,
          'float': float
        });
      } else {
        activeItem.eq(i).css({
          'margin-right': marginRightLast,
          'margin-left': marginLeft,
          'float': floatLast
        });
      }
    }
  }); 

  // перерасчет отступов при изменении размеров окна
  $(window).on('resize', function(event) {
    event.preventDefault();
    var item = $('.works_menu__item.active'),
        contentItem = $('.works__card_item'),
        itemCategory = $('.works_menu__item.active').data('category'),
        itemsInRow = 3;
        marginRight = '30px';
        marginRightLast = '0px';
        marginLeft = '0px';
        float = 'left';
        floatLast = 'right';
        windowSize = $(window).width();

    // определяем размер отступа на основании от размера экрана
    if (windowSize > 960 && windowSize <= 1281) {
      marginRight = '15px';
    } else if ( windowSize > 650 && windowSize <= 960 ) {
      itemsInRow = 2;
      marginRight = '15px';
    } else if ( windowSize <= 650 ) {
      itemsInRow = 1;
      marginRightLast = 'auto';
      marginLeft = 'auto';
      floatLast = 'none';
    }

    // фильтруем по data-category и показываем
    activeItem = contentItem.filter('.' + itemCategory);        
    // activeItem.show();

    // задаем отступы
    for (var i = 0; i < activeItem.length; i++) {
      if ( i % itemsInRow < (itemsInRow - 1) ) {
        activeItem.eq(i).css({
          'margin-right': marginRight,
          'margin-left': marginLeft,
          'float': float
        });
      } else {
        activeItem.eq(i).css({
          'margin-right': marginRightLast,
          'margin-left': marginLeft,
          'float': floatLast
        });
      }
    }

  });
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
