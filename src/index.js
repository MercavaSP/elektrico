'use strict';


import topSlider from "./modules/topSlider";
import togglePopup from "./modules/togglePopup";
import scroll from "./modules/scroll";
import SliderCarousel from "./modules/carousel";
// import validate from "./modules/validate";
import accordeonToggle from "./modules/accordeonToggle";
import sendForm from "./modules/sendForm";
import formsRules from "./modules/formRules";

document.addEventListener('DOMContentLoaded', () => {

    topSlider();
    togglePopup();
    scroll();
    accordeonToggle();
    sendForm();
    formsRules();

    const carousel = new SliderCarousel({
			main: '.services-elements',
			wrap: '.services-carousel',
			next: '#btnRight',
			prev: '#btnLeft',
			slidesToShow: 3,
            infinity: true,
			
		});

		carousel.init();

});
