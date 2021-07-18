'use strict';


import topSlider from "./modules/topSlider";
import togglePopup from "./modules/togglePopup";
import scroll from "./modules/scroll";
// import carousel from "./modules/carousel";
import accordeonToggle from "./modules/accordeonToggle";
import sendForm from "./modules/sendForm";

document.addEventListener('DOMContentLoaded', () => {

    topSlider();
    togglePopup();
    scroll();
    // carousel();
    accordeonToggle();
    sendForm();

});
