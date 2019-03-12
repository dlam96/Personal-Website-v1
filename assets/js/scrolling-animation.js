$(document).ready(function(){

	var scrollLink = $('.scroll');
	

	// Smooth scrolling
	$('a.scroll[href*="#"]:not([href="#"])').click(function(event) {
		event.preventDefault();
	  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);

		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: (target.offset().top)
		  }, 1000);
		  return false;
		}
	  }
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	$('.scroll').click(function() {
	  $('.navbar-collapse').collapse('hide');
	});
  
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
	  target: '#scroll-nav'
	});

	// //smooth scrolling
	// scrollLink.click(function(event){
	// 	event.preventDefault();
	// 	var offset = 0;
	// 	var target = this.hash;

	// 	if ($(this).data('offset') != undefined) {
	// 		offset = $(this).data('offset');
	// 	}

	// 	$('body,html').animate({
	// 		scrollTop: $(this.hash).offset().top
	// 		}, 1000 );
		
	// });

	// // Active Link switching
	// $(window).scroll(function(){
		
	// 	var sectionOffset;
	// 	var target = $(this.hash);
	// 	var scrollbarLocation = $(this).scrollTop();
	
	// 	scrollLink.each(function(){
	// 		console.log(scrollbarLocation)

	// 		// if (scrollbarLocation <= 920)
	// 			sectionOffset= $('a[href="'+ target + '"]').offset().top;
	// 		// else
	// 			// sectionOffset= $(this.hash).offset().top;
	// 			console.log('section offset' + target)

	// 		if (sectionOffset <= scrollbarLocation){
				
	// 			$('.navbar-nav .nav-link').removeClass('active');
	// 			$(this).addClass('active');
	// 			// $(this).parent().addClass('active');
				
	// 		}
	// 	})
	// });
})