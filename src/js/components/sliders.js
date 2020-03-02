import "swiper/css/swiper.min.css";

import Swiper from "swiper";

import sliderConfig from "../configs/sliders";

const swipers = [];

(function setTimer() {

    // общий таймер для всех слайдеров на главной

    setInterval(() => {

        if ( swipers.length === 0 ) return;
        // на мобиле нет прогресс бара
        if ( swipers[0].progressBar.offsetHeight === 0) return;
        
        swipers.forEach(swiper => {

            if ( swiper.slideProgress > 0 && swiper.slideProgress < 100 ) {
                swiper.slideProgress += 0.5;
                swiper.progressBar.style.width = `${swiper.slideProgress}%`;
            } else if ( swiper.slideProgress > 0 ) {
                swiper.slideNext();   
            }
        });
    }, 70);
})();

function initSlider(swiper, progressBar) {
    
    swiper.progressBar = progressBar;
    swiper.slideProgress = 0;
    swiper.slideProgress += 0.5;
    swipers.push(swiper);

    swiper.on('transitionStart', () => {
        swiper.slideProgress = 0;
        swiper.progressBar.style.width = `${swiper.slideProgress}%`;
    });

    swiper.on('transitionEnd', () => {
        swiper.slideProgress += 0.5;
    });

}


export function initMainSlider() {

    const section = document.querySelector('.main-slider');
    const swiperContainer = section.querySelector('.swiper-container');
    const progressBar = section.querySelector('.slider-progress-bar');

    const swiper = new Swiper(swiperContainer, sliderConfig.main);

    initSlider(swiper, progressBar);
}

export function initNewsSlider() {

    const section = document.querySelector('.main-news');
    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.news);
}

export function initTerritorySlider() {

    const section = document.querySelector('.main-territory');
    const swiperContainer = section.querySelector('.swiper-container');
    const progressBar = section.querySelector('.slider-progress-bar');

    const swiper = new Swiper(swiperContainer, sliderConfig.territory);

    initSlider(swiper, progressBar);
}

export function initGallerySlider() {

    const section = document.querySelector('.main-gallery');
    const swiperContainer = section.querySelector('.swiper-container');
    const progressBar = section.querySelector('.slider-progress-bar');

    const swiper = new Swiper(swiperContainer, sliderConfig.gallery);

    initSlider(swiper, progressBar);
}

export function initPopupSlider(section, images) {

    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.popup);
    const closeBtn = section.querySelector('.js-close');

    images.forEach( (image, i) => {

        image.addEventListener('click', () => {

            section.classList.remove('hidden');
            if ( !swiper.ready ) swiper.init();
            swiper.slideTo(i, 0);
        });
    });

    closeBtn.addEventListener('click', () => {
        section.classList.add('hidden');
    });

    section.addEventListener('wheel', (e) => {
        e.preventDefault();
    });

}

export function initPagesSlider() {

    const section = document.querySelector('.pages__photos');
    const swiperContainer = section.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, sliderConfig.pages);

}


export default function initMainSliders() {

    initMainSlider();
    initNewsSlider();
    initTerritorySlider();
    initGallerySlider();
}
