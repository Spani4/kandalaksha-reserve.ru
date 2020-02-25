import "../scss/main.scss";


import initHeaderMobile from "./modules/header-mobile";
import collapsibleNav from "./components/collapsible-nav";

import { initContactsMap } from "./components/maps";

import { initMainSlider, initTerritorySlider, initGallerySlider, initNewsSlider } from "./components/sliders";
// import initSliders from "./components/sliders";





document.addEventListener('DOMContentLoaded', () => {
    
    initHeaderMobile();
    collapsibleNav();
    
    initMainSlider();
    initNewsSlider();
    initTerritorySlider();
    initGallerySlider();
    // initSliders();

    initContactsMap();
});

