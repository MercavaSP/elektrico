'use strict';

import togglePopup from "./modules/togglePopup";
import scroll from "./modules/scroll";
// import carousel from "./modules/carousel";
import accordeonToggle from "./modules/accordeonToggle";
import sendForm from "./modules/sendForm";

document.addEventListener('DOMContentLoaded', () => {

    togglePopup();
    scroll();
    // carousel();
    accordeonToggle();
    sendForm();

});
