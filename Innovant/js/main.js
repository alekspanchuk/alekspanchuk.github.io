$(document).ready(function() {

// MENU
  var menu = $('.hamburger__menu_list');
  // show
    $('.header__hamburger').on('click', function(event) {
      event.preventDefault();
      menu.fadeIn();
    });
  // hide on click out of menu
    $(document).mouseup(function (e) {
      if (menu.has(e.target).length === 0){
          menu.hide();
      }
    });
  // Smooth transition
    // for top menu
    $(".header__menu_item").on("click","a", function (event) {
        var item = $(this).closest('.header__menu_item');
        event.preventDefault();
        
        item.addClass('active')
            .siblings()
            .removeClass('active');

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
    // for hamburger menu
    $(".hamburger__menu_item").on("click","a", function (event) {
        event.preventDefault();
        menu.fadeOut();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
// ABOUT
  $(".content__button").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top + 30;
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
    // фильтруем по data-category и показываем
    activeItem = contentItem.filter('.' + itemCategory);        
    contentItem.hide();
    activeItem.fadeIn();

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
        windowSize = $(window).width() + 17;

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
// SCROLL HANDLER (TO TOP BUTTON AND FIXED MENU)
  $('.totop').on('click', function(event) {
    event.preventDefault();
    $('body, html').animate( {scrollTop: 0}, 800);
    return false;
  });

  $(window).on('scroll', function(event) {
    var screenHeight = $('.header').height();

    // show and hide TO TOP button
    if ( $(window).scrollTop() > screenHeight ) {
      $('.totop').show();
    } else {
      $('.totop').hide();
    }
    // change TOP MENU color depend on position
    if ( ($(window).scrollTop() > $('.header').height() - 20) && 
       ( ($(window).scrollTop() < $('.fback').offset().top - 30) ||
         ($(window).scrollTop() > $('.fback').offset().top + $('.fback').height() - 30) ) ) {
      $('.header__menu_item a').css('color', '#585858');
      $('.header__actions').css('color', '#585858');
    } else {
      $('.header__menu_item a').css('color', '#f1f1f1');
      $('.header__actions').css('color', '#ffffff');
    }
    // change active menu item depend on position
    var pagePos = $(window).scrollTop(),
        homeEnd = $('.header').height() - 20,
        aboutBegin = $('.about').offset().top - 20,
        aboutEnd = aboutBegin + $('.about').height(),
        portfolioBegin = $('.works').offset().top - 20,
        portfolioEnd = portfolioBegin + $('.works').height(),
        servicesBegin = $('.serv').offset().top - 20,
        servicesEnd = servicesBegin + $('.serv').height(),
        blogBegin = $('.blog').offset().top - 20,
        blogEnd = blogBegin + $('.blog').height(),
        contactBegin = $('.contact').offset().top - 20,
        contactEnd = contactBegin + $('.contact').height();

    if (pagePos < homeEnd) {
      $('.item--home').addClass('active')
        .siblings()
        .removeClass('active');
    } else if ( (pagePos > aboutBegin) && (pagePos < aboutEnd) ) {
      $('.item--about').addClass('active')
        .siblings()
        .removeClass('active');
    } else if ( (pagePos > portfolioBegin) && (pagePos < portfolioEnd) ) {
      $('.item--portfolio').addClass('active')
        .siblings()
        .removeClass('active');
    } else if ( (pagePos > servicesBegin) && (pagePos < servicesEnd) ) {
      $('.item--services').addClass('active')
        .siblings()
        .removeClass('active');
    } else if ( (pagePos > blogBegin) && (pagePos < blogEnd) ) {
      $('.item--blog').addClass('active')
        .siblings()
        .removeClass('active');
    } else if ( (pagePos > contactBegin) && (pagePos < contactEnd) ) {
      $('.item--contact').addClass('active')
        .siblings()
        .removeClass('active');
    }

  });
// CONTACT FORM
  $(".form__default").submit(function() {
    $.ajax({
      type: "POST",
      url: "smart.php",
      data: $(this).serialize()
    }).done(function() {
      alert('Сообщение отправлено!')
      $(this).trigger("reset");
    });
    return false;
  });

});