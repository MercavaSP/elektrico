'use strict';

import togglePopup from "./modules/togglePopup";
import scroll from "./modules/scroll";
import accordeonToggle from "./modules/accordeonToggle";
import sendForm from "./modules/sendForm";

document.addEventListener('DOMContentLoaded', () => {

    togglePopup();
    scroll();
    accordeonToggle();
    sendForm();

});
