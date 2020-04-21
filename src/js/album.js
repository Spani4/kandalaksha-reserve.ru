import "../scss/album.scss";

import LazyLoad from "vanilla-lazyload";
import initGlobals from "./global";
import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";
import { initPopupSlider } from "./components/sliders";


document.addEventListener('DOMContentLoaded', () => {
    
    const section = document.querySelector('.album__slider');
    const images = document.querySelectorAll('.js-open-slider');
    
    initGlobals();

    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initPopupSlider(section, images);
    initContactsForm();
    initContactsMap();
});