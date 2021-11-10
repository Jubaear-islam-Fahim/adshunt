/* ============================================================

 Theme Name: DRO - Paralax HTML Template
 Theme URI: http://
 Description: DRO - Paralax HTML Template
 Author: Rifat
 Author URI: 
 Version: 1.0 

============================================================== */
 
$(function() {

    "use strict";// this function is executed in strict mode

	/* ------------------------------------------------------ */
	/*  1. SHRINK HEADER JS
	/* ------------------------------------------------------ */ 
	var shrinkHeader=600;
		$(window).scroll(function(){
		var scroll=getCurrentScroll();
			if(scroll>=shrinkHeader){
				$('.navbar').addClass('shrink');
			}
		else{
			$('.navbar').removeClass('shrink');}
	});
	function getCurrentScroll(){
		return window.pageYOffset;
	};
	
    /* --------------------------- */
	/*  2. MENU SMOOTH SCROLLING JS
	/* --------------------------- */ 
	$('.browse-locations-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	 
	/* --------------------------- */
	/*  3. profile slid 
	/* --------------------------- */ 
	$('.profile-slid').owlCarousel({
		loop:false,
		smartSpeed: 1000,
		autoplay: 3000, 
		nav:false,  
		dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1, 
			},
			600:{
				items:2, 
			},
			1000:{
				items:2, 
			}
		}
	});
	/* --------------------------- */
	/*  3. profile slid 
	/* --------------------------- */ 
	$('.profile-slid2').owlCarousel({
		loop:false,
		smartSpeed: 1000,
		autoplay: 3000, 
		nav:false,  
		dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1, 
			},
			600:{
				items:1, 
			},
			1000:{
				items:1, 
			}
		}
	});
	/* --------------------------- */
	/*  3. profile slid 
	/* --------------------------- */ 
	$('.featured-details').owlCarousel({
		loop:false,
		smartSpeed: 1000,
		autoplay: 3000, 
		nav:true,  
		dots: false,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1, 
			},
			600:{
				items:2, 
			},
			1000:{
				items:3, 
			}
		}
	});
	/* --------------------------- */
	/*  3. profile slid 
	/* --------------------------- */ 
	$('.ad-details-slide').owlCarousel({
		loop:false, 
		autoplay: 5000, 
		nav:false,  
		dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1, 
			},
			600:{
				items:1, 
			},
			1000:{
				items:1, 
			}
		}
	});
	/* --------------------------- */
	/*  4. furniture slid 
	/* --------------------------- */ 
	$('.furniture-slid').owlCarousel({
		loop:false,
		nav:true,  
		dots: false,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:2, 
			},
			600:{
				items:4, 
			},
			1000:{
				items:6, 
			}
		}
	});
	/* --------------------------- */
	/*  5. imagesLoaded JS
	/* --------------------------- */  
	$('#container').imagesLoaded( function() {
	  	var $grid = $('.featured-grid').isotope({
		  itemSelector: '.featured-grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.featured-grid-item'
		  }
		});

		// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		
		//for menu active class
		$('.featured-button button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	}); 
	
	/* --------------------------- */
	/*  3. YouTube video click box JS
	/* --------------------------- */   
	$('.video-v').magnificPopup({ 
	  type: 'iframe'
	  // other options
	});
	 
	
	/* --------------------------- */
	/*  3. YouTube video click box JS
	/* --------------------------- */   
	$( "#tabs" ).tabs();
	 
	/* --------------------------- */
	/*  3. YouTube video click box JS
	/* --------------------------- */   
	$('#lightSlider').lightSlider({
		gallery: true,
		item: 1,
		loop:true,
		slideMargin: 0,
		thumbItem: 9
	});
	 
	
});
  
	 