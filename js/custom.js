/*=====================================================================
										     Services
=====================================================================*/

$(function() {
	// animation on scroll events
	new WOW().init();
});

$(function() {
	var $window = $(window),
	$icon = $(".service-item-icon i");

	function resize() {
		if ($window.width() < 480) {
			return $icon.addClass("fa-2x"),
				   $icon.removeClass("fa-3x");
		}
		$icon.addClass("fa-3x");
		$icon.removeClass("fa-2x");
	}
	$window
				.resize(resize)
				.trigger('resize');
});

/*=====================================================================
										     Work
=====================================================================*/
$(function() {
	$("#work").magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	});
});

/*=====================================================================
										     Team
=====================================================================*/
$(function() {
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		loop: true,
		smartSpeed: 700,
		autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  }
		}
	});
});

/*=====================================================================
										     About
=====================================================================*/
$(function() {
	var $window = $(window),
	$diagonal = $("#about-bg-diagonal");

	function resize() {
		if ($window.width() < 992) {
			return $diagonal.addClass("col order-first");
		}
		$diagonal.removeClass("col order-first");
	}
	$window
				.resize(resize)
				.trigger('resize');
});

/*=====================================================================
										     Testimonials
=====================================================================*/
$(function() {
	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		smartSpeed: 700,
		autoplayHoverPause: true
	});
});

/*=====================================================================
										     Stats
=====================================================================*/
$(function(){
	$('.counter').counterUp({
    delay: 10,
    time: 2000,
    offset: 70,
    beginAt: 100
	});
});

/*=====================================================================
										     Clients
=====================================================================*/
$(function() {
	$("#client-list").owlCarousel({
		items: 4,
		autoplay: true,
		loop: true,
		smartSpeed: 700,
		autoplayHoverPause: true,
		responsive : {
    // breakpoint from 0 up
	    0 : {
	    	items: 1
	    },
	    // breakpoint from 480 up
	    480 : {
	      items: 2
	    },
	    // breakpoint from 768 up
	    768 : {
	     	items: 3
	    },
	    992 : {
	    	items: 4
	    }
		}		
	});
});

/*=====================================================================
										     Navigation
=====================================================================*/
$(function() {
	$(window).scroll(function(){
		if($(this).scrollTop() < 50) {
			// hide nav
			$("nav").removeClass("vesco-top-nav");
			$("#back-to-top").fadeOut();
		} else {
			// show nav
			$("nav").addClass("vesco-top-nav");
			$("#back-to-top").fadeIn();
		}
	});
});

// Clsoe mobile menu on click
$(function() {
	$(".navbar-collapse ul li a").on("click touch", function(){
		$(".navbar-toggler").click();
	});
});

/*=====================================================================
										     Smooth Scrolling
=====================================================================*/
$(function() {
	$("a.nav-link, a.btn, a.smooth-scroll").click(function(event){
		event.preventDefault();
		// get/reeturn id ie: #about, #work, #team...
		var section = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});

/*=====================================================================
										     Hide Bottom NAV
=====================================================================*/
$(function() {
	var $window = $(window);

	function resize() {
		if ($window.width() < 768) {
			return $("#footer-menu").hide();
		}
		$("#footer-menu").show();
	}
	$window
		.resize(resize)
		.trigger('resize');
});

