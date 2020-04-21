import "../scss/main.scss";

import LazyLoad from "vanilla-lazyload";


import initGlobals from "./global";
import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";
import initMainSliders from "./components/sliders";

// import { initMainSlider, initTerritorySlider, initGallerySlider, initNewsSlider } from "./components/sliders";


document.addEventListener('DOMContentLoaded', () => {

    initGlobals();    
    initMainSliders();

    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initContactsForm();
    initContactsMap();
});

