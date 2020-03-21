'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JAVASCRIPT-КАРУСЕЛЬ:
////////////////////////////////////////////////////////////////////////////////////////////////////////////
var testimonialsCarrousel = new window.Carrousel({
	slides: document.querySelectorAll('.testimonials__item'),
	btnPrev: document.querySelector('.testimonials__btn-prev'),
	btnNext: document.querySelector('.testimonials__btn-next'),
	toggles: document.querySelectorAll('.testimonials__toggle-btn'),
	loop: false
});
