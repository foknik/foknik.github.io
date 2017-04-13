$(document).ready(function() {
	// Dropdown menu
	var $nav = $('div.adaptiv-button-wrap');
	$nav.click(function() {
		$('.nav-wrap').slideToggle(300)
		$('#open').toggleClass('burg-line');
	})
	$(window).resize(function() {
		if ($(window).width() > 992) {
			$('.nav-wrap ').removeAttr('style');
		}
	})
	$('.slide-content').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed: 2500,
	  cssEase: 'linear',
	})
	$('.bxslider').bxSlider({
		slideWidth: 5000,
	    minSlides: 2,
	    maxSlides: 8,
	    moveSlides: 1,
	    slideMargin: 10,
	    pager: false,
	    prevText: '',
	    nextText: '',
	});
});