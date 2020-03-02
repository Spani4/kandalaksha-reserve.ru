import "../scss/album.scss";

import LazyLoad from "vanilla-lazyload";

import initHeaderMobile from "./modules/header-mobile";
import initNavMobile from "./modules/nav-mobile";
import collapsibleNav from "./components/collapsible-nav";
import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";

import { initPopupSlider } from "./components/sliders";





document.addEventListener('DOMContentLoaded', () => {
    
    const section = document.querySelector('.album__slider');
    const images = document.querySelectorAll('.js-open-slider');

    initNavMobile();
    initHeaderMobile();
    collapsibleNav();

    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    // initSlider();
    initPopupSlider(section, images);
    initContactsForm();
    initContactsMap();
});