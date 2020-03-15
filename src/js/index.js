import "../scss/main.scss";

import LazyLoad from "vanilla-lazyload";


import initHeaderMobile from "./modules/header-mobile";
import initNavMobile from "./modules/nav-mobile";

import collapsibleNav from "./components/collapsible-nav";

import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";

// import { initMainSlider, initTerritorySlider, initGallerySlider, initNewsSlider } from "./components/sliders";
import initMainSliders from "./components/sliders";





document.addEventListener('DOMContentLoaded', () => {
    
    initHeaderMobile();
    initNavMobile();
    collapsibleNav();
    
    initMainSliders();

    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initContactsForm();
    initContactsMap();
});

