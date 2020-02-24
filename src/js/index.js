import "../scss/main.scss";


import collapsibleNav from "./components/collapsible-nav";

import { initMainPageMap } from "./components/maps";

import { initMainSlider, initTerritorySlider, initGallerySlider, initNewsSlider } from "./components/sliders";





document.addEventListener('DOMContentLoaded', () => {
    
    collapsibleNav();
    
    initMainSlider();
    initNewsSlider();
    initTerritorySlider();
    initGallerySlider();

    initMainPageMap();
});

