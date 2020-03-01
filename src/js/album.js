import "../scss/album.scss";

import LazyLoad from "vanilla-lazyload";

import initHeaderMobile from "./modules/header-mobile";
import initNavMobile from "./modules/nav-mobile";
import collapsibleNav from "./components/collapsible-nav";
import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";

import { initAlbumSlider } from "./components/sliders";


function initSlider() {

    const images = document.querySelectorAll('.js-image');
    const [ slider, swiper ] = initAlbumSlider();
    const closeBtn = slider.querySelector('.js-close');

    images.forEach( (image, i) => {

        image.addEventListener('click', () => {

            slider.classList.remove('hidden');
            if ( !swiper.ready ) swiper.init();
            swiper.slideTo(i, 0);
        });
    });

    closeBtn.addEventListener('click', () => {
        slider.classList.add('hidden');
    });

    slider.addEventListener('wheel', (e) => {
        e.preventDefault();
    });
}


document.addEventListener('DOMContentLoaded', () => {
    
    initNavMobile();
    initHeaderMobile();
    collapsibleNav();

    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initSlider();
    initContactsForm();
    initContactsMap();
});