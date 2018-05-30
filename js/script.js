$(document).ready(function() {
	$('.slider__container').slick({
		// infinite: true,
		slidesToShow: 3,
		initialSlide: 1,
		accessibility: true,
		prevArrow: ".prev__button",
		nextArrow: ".next__button"
	});
});