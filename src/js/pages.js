import "../scss/pages.scss";

import LazyLoad from "vanilla-lazyload";

import initGlobals from "./global";

import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";
import { initPopupSlider, initPagesSlider } from "./components/sliders";


document.addEventListener('DOMContentLoaded', () => {

    initGlobals();

    const images = document.querySelectorAll('.js-open-slider');

    if ( images.length ) {
        const section = document.querySelector('.pages__popup-slider');
        initPagesSlider();
        initPopupSlider(section, images);

        const lazyLoader = new LazyLoad({
            elements_selector: '[data-bg], [data-src]',
        });
    }

    initContactsForm();
    initContactsMap();
});