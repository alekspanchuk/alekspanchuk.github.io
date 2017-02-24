$(document).ready(function() {
/* TOP TOP BUTTON ============================= */
	// to top handler
		$('.totop').on('click', function(event) {
		  event.preventDefault();
		  $('body, html').animate( {scrollTop: 0}, 800);
		  return false;
		});

		$(window).on('scroll', function(event) {
		  var screenHeight = $('.header').height();
		  if ( $(window).scrollTop() > screenHeight ) {
		    $('.totop').show();
		  } else {
		    $('.totop').hide();
		  }
		});

/* MOBILE MENU ================================ */
	// hamburger menu show
		var dropdown = $('.dropdown'),
				mobmenu = $('.mobmenu__icon');

		mobmenu.on('click', function(event) {
			event.preventDefault();
			dropdown.toggleClass('dropdown--show');
		});

	// hide on click out of menu and menu button
		$(document).on('click', function(event) {
			if( ($(event.target).closest(dropdown).length) || ($(event.target).closest(mobmenu).length) ) 
        return;
			dropdown.removeClass('dropdown--show');
      event.stopPropagation();
		});

  // dropdown menu on item click
		var menuItem = $('.dropdown__item');
		menuItem.on('click', function(event) {
			event.preventDefault();
			// action here
			dropdown.toggleClass('dropdown--show');
		});

});
/* ============================================ */
/* ============================================ */
/* ============================================ */
