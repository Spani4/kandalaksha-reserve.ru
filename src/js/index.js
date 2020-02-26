import "../scss/main.scss";


import initHeaderMobile from "./modules/header-mobile";
import initNavMobile from "./modules/nav-mobile";

import initLazyImages from "./components/lazy-img";
import collapsibleNav from "./components/collapsible-nav";

import { initContactsMap } from "./components/maps";

// import { initMainSlider, initTerritorySlider, initGallerySlider, initNewsSlider } from "./components/sliders";
import initMainSliders from "./components/sliders";





document.addEventListener('DOMContentLoaded', () => {
    
    initHeaderMobile();
    initNavMobile();
    collapsibleNav();
    
    // initMainSlider();
    // initNewsSlider();
    // initTerritorySlider();
    // initGallerySlider();
    initMainSliders();
    initLazyImages();

    initContactsMap();
});

