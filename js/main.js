// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	/*циклить*/
	loop: true,
	margin: 20,
	responsive: {
		1200: {
			items: 7,
			margin: 0,
		},
	},
});

$('.slider_btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider_btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});

/* Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};
*/
