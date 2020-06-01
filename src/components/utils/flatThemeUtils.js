/**
  * flatSpacer
  * flatOwl
  * flatGallery
  * inViewport
  * flatEqualizeHeight
  * flatContentBox
  * searchIcon
  * flatTabs
  * flatAccordions
  * flatProgressBar
  * googleMap
  * flatCounter
  * flatIsotope
  * swClick
  * Parallax
*/
const windowGlobal = typeof window !== 'undefined' && window;
let $ = windowGlobal.jQuery
let doc = windowGlobal.document

export const retinaLogo = function() {
	var retina = false; //windowGlobal.devicePixelRatio > 1 ? true : false;

	if ( matchMedia( 'only screen and (max-width: 763px)' ).matches )
		retina = true;

	var $logo = $('#site-logo img');
	var $logo_retina = $logo.data('retina');

	if ( retina && $logo_retina ) {
		$logo.attr({
			src: $logo.data('retina'),
			width: $logo.data('width'),
			height: $logo.data('height')
		});
	}
}

export const scrollToTop = function() {         
	$(document).off('click', '#scroll-top')   
	$(document).on('click', '#scroll-top', function() {
		$('html, body').animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');                
	});
	
	$(windowGlobal).scroll(function() {
		if ( $(this).scrollTop() > 300 ) {
			$('#scroll-top').addClass('show');
		} else {
			$('#scroll-top').removeClass('show');
		}
	});
}



export const mobileNav = function() {
	var menuType = 'desktop';
	var mode = 'desktop';
	var wrapMenu = $('#site-header-inner .wrap-inner');
	var navExtw = $('.nav-extend.active');
	var navExt = $('.nav-extend.active').children();

	if ( matchMedia( 'only screen and (max-width: 991px)' ).matches )
		mode = 'mobile';

	if ( true ) {//mode != menuType ) {
		menuType = mode;
		console.log(menuType)
		if ( mode === 'mobile' ) {
			
			$('#main-nav').attr('id', 'main-nav-mobi')
				.appendTo('#site-header')
				.hide().children('.menu').append(navExt)
					.find('li:has(ul)')
					.children('ul')
						.removeAttr('style')
						.hide()
						.before('<span class="arrow"></span>');
		} else {
			if ( $('body').is('.header-style-3') )
				wrapMenu = $('.site-navigation-wrap .inner');

			$('#main-nav-mobi').attr('id', 'main-nav')
				.removeAttr('style')
				.prependTo(wrapMenu)
				.find('.ext').appendTo(navExtw)
				.parent().siblings('#main-nav')
				.find('.sub-menu')
					.removeAttr('style')
				.prev().remove();
					
			$('.mobile-button').removeClass('active');
		}
	}

	$(doc).off('click', '.mobile-button');
	$(doc).on('click', '.mobile-button', function() {
		$(this).toggleClass('active');
		$('#main-nav-mobi').slideToggle();
	})

	$(doc).off('click', '#main-nav-mobi .arrow');
	$(doc).on('click', '#main-nav-mobi .arrow', function() {
		$(this).toggleClass('active').next().slideToggle();
	})

}

export const mobileMenuEvents = function() {
	
	$(windowGlobal).on('resize', function() {
		mobileNav();
	});

	
}

export const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	}
};

export const flatSpacer = function() {
	var mode = 'desktop';
	if (matchMedia('only screen and (max-width: 991px)').matches) mode = 'mobile';
	if (matchMedia('only screen and (max-width: 767px)').matches) mode = 'smobile';
	$('.themesflat-spacer').each(function() {
		if (mode === 'desktop') {
			$(this).attr('style', 'height:' + $(this).data('desktop') + 'px');
		} else if (mode == 'mobile') {
			$(this).attr('style', 'height:' + $(this).data('mobile') + 'px');
		} else {
			$(this).attr('style', 'height:' + $(this).data('smobile') + 'px');
		}
	});
};

export const Parallax = function() {
	if ($().parallax && isMobile.any() == null) {
		$('.parallax-1').parallax('50%', 0.1);
		$('.parallax-3').parallax('50%', 0.1);
		$('.parallax-4').parallax('50%', 0.1);
	}
};

export const flatOwl = function() {
	if ($().owlCarousel) {
		$('.themesflat-carousel-box').each(function() {
			var $this = $(this),
				auto = $this.data('auto'),
				item = $this.data('column'),
				item2 = $this.data('column2'),
				item3 = $this.data('column3'),
				gap = Number($this.data('gap'));
				
			$this.find('.owl-carousel').owlCarousel({
				margin: gap,
				nav: true,
				navigation: true,
				pagination: true,
				autoplay: auto,
				autoplayTimeout: 5000,
				responsive: {
					0: {
						items: item3
					},
					600: {
						items: item2
					},
					1000: {
						items: item
					}
				}
			});
		});
	}
};

export const flatGallery = function() {
	if ($().owlCarousel) {
		$('.themesflat-gallery').each(function() {
			var sthis = $(this),
				auto = sthis.data('auto'),
				item = sthis.data('column'),
				item2 = sthis.data('column2'),
				item3 = sthis.data('column3'),
				gap = Number(sthis.data('gap'));

			sthis.find('.owl-carousel').owlCarousel({
				margin: gap,
				nav: true,
				thumb: true,
				thumbImage: true,
				navigation: true,
				pagination: true,
				autoplay: auto,
				autoplayTimeout: 5000,
				responsive: {
					0: {
						items: item3
					},
					600: {
						items: item2
					},
					1000: {
						items: item
					}
				}
			});
		});
	}
};

export const inViewport = function() {
	$('[data-inviewport="yes"]').waypoint(
		function() {
			$(this).trigger('on-appear');
		},
		{ offset: '90%', triggerOnce: true }
	);

	$(window).on('load', function() {
		setTimeout(function() {
			$.waypoints('refresh');
		}, 100);
	});
};


export const flatEqualizeHeight = function() {
	setTimeout(function() {
		$(document).imagesLoaded(function() {
			if (matchMedia('only screen and (max-width: 767px)').matches) {
				$('.equalize').equalize({ equalize: 'outerHeight', reset: true });
				$('.equalize.sm-equalize-auto').children().css('height', '');
				return false;
			} else if (matchMedia('only screen and (max-width: 991px)').matches) {
				$('.equalize').equalize({ equalize: 'outerHeight', reset: true });
				$('.equalize.sm-equalize-auto').children().css('height', '');
				return false;
			} else if (matchMedia('only screen and (max-width: 1199px)').matches) {
				$('.equalize').equalize({ equalize: 'outerHeight', reset: true });
				return false;
			} else {
				$('.equalize').equalize({ equalize: 'outerHeight', reset: true });
			}
		});
	}, 500);
};

export const flatContentBox = function() {
	var mode = 'desktop';
	if (matchMedia('only screen and (max-width: 1199px)').matches) mode = 'mobile';
	$('.themesflat-content-box').each(function() {
		var margin = $(this).data('margin');
		if (margin) {
			if (mode === 'desktop') {
				$(this).attr('style', 'margin:' + $(this).data('margin'));
			} else if (mode === 'mobile') {
				$(this).attr('style', 'margin:' + $(this).data('mobilemargin'));
			}
		}
	});
};

export const searchIcon = function() {
	$(document).on('click', function(e) {
		var clickID = e.target.id;
		if (clickID !== 'input-search') {
			$('.header-search-form').removeClass('show');
		}
	});

	$('.header-search-icon').on('click', function(event) {
		event.stopPropagation();
	});

	$('.header-search-form').on('click', function(event) {
		event.stopPropagation();
	});

	$('.header-search-icon').on('click', function(event) {
		if (!$('.header-search-form').hasClass('show')) {
			$('.header-search-form').addClass('show');
			event.preventDefault();
		} else $('.header-search-form').removeClass('show');
		event.preventDefault();
	});
};

export const flatTabs = function() {
	$('.themesflat-tabs').each(function() {
		var list = '',
			title = $(this).find('.item-title'),
			titleWrap = $(this).children('.tab-title');

		title
			.each(function() {
				list = list + '<li>' + $(this).html() + '</li>';
			})
			.appendTo(titleWrap);

		$(this).find('.tab-title li').filter(':first').addClass('active');
		$(this).find('.tab-content-wrap').children().hide().filter(':first').show();

		$(this).find('.tab-title li').on('click', function(e) {
			var idx = $(this).index(),
				content = $(this).closest('.themesflat-tabs').find('.tab-content-wrap').children().eq(idx);

			$(this).addClass('active').siblings().removeClass('active');
			content.fadeIn('slow').siblings().hide();

			e.preventDefault();
		});
	});
};

export const flatAccordions = function() {
	var args = { easing: 'easeOutExpo', duration: 500 };

	$('.accordion-item.active').find('.accordion-content').show();
	$('.accordion-heading').on('click', function() {
		if (!$(this).parent().is('.active')) {
			$(this)
				.parent()
				.toggleClass('active')
				.children('.accordion-content')
				.slideToggle(args)
				.parent()
				.siblings('.active')
				.removeClass('active')
				.children('.accordion-content')
				.slideToggle(args);
		} else {
			$(this).parent().toggleClass('active');
			$(this).next().slideToggle(args);
		}
	});
};

export const flatProgressBar = function() {
	if ($().waypoint) {
		$('.progress-bg').on('on-appear', function() {
			$(this).each(function() {
				var percent = parseInt($(this).data('percent'));

				$(this).find('.progress-animate').animate(
					{
						width: percent + '%'
					},
					1000,
					'easeInCirc'
				);

				$(this).parent('.themesflat-progress').find('.perc').addClass('show').animate(
					{
						width: percent + '%'
					},
					1000,
					'easeInCirc'
				);
			});
		});
	}
};


export const googleMap = function() {
	// gmap default
	if ($().gmap3) {
		var data = JSON.parse('[{"address":"Jose Hernandez 370","content":""}]');
		$('.themesflat-map').gmap3({
			map: {
				options: {
					zoom: 13,
					center: [ '-34.4257838','-58.7229504','17z' ],
					mapTypeId: 'Autora',
					mapTypeControlOptions: {
						mapTypeIds: [ 'Autora', window.google.maps.MapTypeId.SATELLITE, window.google.maps.MapTypeId.HYBRID ]
					},
					scrollwheel: true
				}
			}
		});
	}
	// json loop
	$.each(data, function(key, val) {
		$('.themesflat-map').gmap3({
			marker: {
				values: [
					{
						address: val.address,
						options: {
							icon: './assets/img/map/icon-map.png'
						}
					}
				]
			},
			styledmaptype: {
				id: 'Autora',
				options: {
					name: 'Autora'
				},
				styles: [
					{
						featureType: 'administrative',
						elementType: 'all',
						stylers: [
							{
								saturation: '-100'
							}
						]
					},
					{
						featureType: 'administrative.province',
						elementType: 'all',
						stylers: [
							{
								visibility: 'off'
							}
						]
					},
					{
						featureType: 'landscape',
						elementType: 'all',
						stylers: [
							{
								saturation: -100
							},
							{
								lightness: 65
							},
							{
								visibility: 'on'
							}
						]
					},
					{
						featureType: 'poi',
						elementType: 'all',
						stylers: [
							{
								saturation: -100
							},
							{
								lightness: '50'
							},
							{
								visibility: 'simplified'
							}
						]
					},
					{
						featureType: 'road',
						elementType: 'all',
						stylers: [
							{
								saturation: '-100'
							}
						]
					},
					{
						featureType: 'road.highway',
						elementType: 'all',
						stylers: [
							{
								visibility: 'simplified'
							}
						]
					},
					{
						featureType: 'road.arterial',
						elementType: 'all',
						stylers: [
							{
								lightness: '30'
							}
						]
					},
					{
						featureType: 'road.local',
						elementType: 'all',
						stylers: [
							{
								lightness: '40'
							}
						]
					},
					{
						featureType: 'transit',
						elementType: 'all',
						stylers: [
							{
								saturation: -100
							},
							{
								visibility: 'simplified'
							}
						]
					},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [
							{
								hue: '#ffff00'
							},
							{
								lightness: -25
							},
							{
								saturation: -97
							}
						]
					},
					{
						featureType: 'water',
						elementType: 'labels',
						stylers: [
							{
								lightness: -25
							},
							{
								saturation: -100
							}
						]
					}
				]
			}
		});
	});
};


export const flatCounter = function() {
	if ($().countTo) {
		$('.themesflat-counter').on('on-appear', function() {
			$(this).find('.number').each(function() {
				var to = $(this).data('to'),
					speed = $(this).data('speed');

				$(this).countTo({
					to: to,
					speed: speed
				});
			});
		});
	}
};

export const flatIsotope = function() {
	if ($().isotope) {
		var $container = $('.isotope-project');
		$container.imagesLoaded(function() {
			$container.isotope({
				itemSelector: '.project-item',
				transitionDuration: '1s',
				layoutMode: 'fitRows'
			});
		});

		$('.themesflat-filter li').on('click', function() {
			var selector = $(this).find('a').attr('data-filter');
			$('.themesflat-filter li').removeClass('active');
			$(this).addClass('active');
			$container.isotope({ filter: selector });
			return false;
		});
	}
};

export const swClick = function() {
	function activeLayout() {
		$('.switcher-container')
			.on('click', 'a.sw-light', function() {
				$(this).toggleClass('active');
				$('body').addClass('home-boxed');
				$('body').css({ background: '#f6f6f6' });
				$('.sw-pattern.pattern').css({ top: '100%', opacity: 1, 'z-index': '10' });
			})
			.on('click', 'a.sw-dark', function() {
				$('.sw-pattern.pattern').css({ top: '98%', opacity: 0, 'z-index': '-1' });
				$(this).removeClass('active').addClass('active');
				$('body').removeClass('home-boxed');
				$('body').css({ background: '#fff' });
				return false;
			});
	}

	function activePattern() {
		$('.sw-pattern').on('click', function() {
			$('.sw-pattern.pattern a').removeClass('current');
			$(this).addClass('current');
			$('body').css({
				background: 'url("' + $(this).data('image') + '")',
				'background-size': '30px 30px',
				'background-repeat': 'repeat'
			});
			return false;
		});
	}

	activeLayout();
	activePattern();
};
