import "swiper/css/swiper.min.css";

import Swiper from "swiper";

const swipers = [];

(function setTimer() {

    // общий таймер для всех слайдеров на главной

    setInterval(() => {

        if ( swipers.length === 0 ) return;

        swipers.forEach(swiper => {

            const slider = swiper;

            if ( slider.slideProgress > 0 && slider.slideProgress < 100 ) {
                slider.slideProgress += 0.5;
                slider.progressBar.style.width = `${slider.slideProgress}%`;
            } else if ( slider.slideProgress > 0 ) {
                slider.slideNext();   
            }
        });
    }, 70);
})();

function initSlider(swiper, progressBar) {
    
    const slider = swiper;

    slider.progressBar = progressBar;
    slider.slideProgress = 0;
    slider.slideProgress += 0.5;
    swipers.push(slider);

    slider.on('transitionStart', () => {
        slider.slideProgress = 0;
        slider.progressBar.style.width = `${slider.slideProgress}%`;
    });

    slider.on('transitionEnd', () => {
        slider.slideProgress += 0.5;
    });

}


export function initMainSlider() {

    const section = document.querySelector('.main-slider');
    const swiperContainer = section.querySelector('.swiper-container');
    const progressBar = section.querySelector('.slider-progress-bar');

    const swiper = new Swiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        
        navigation: {
            prevEl: '.slider-btn.left',
            nextEl: '.slider-btn.right'
        },
    });

    initSlider(swiper, progressBar);
}

export function initTerritorySlider() {

    const section = document.querySelector('.main-territory');
    const swiperContainer = section.querySelector('.swiper-container');
    const progressBar = section.querySelector('.slider-progress-bar');

    const swiper = new Swiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        
        navigation: {
            prevEl: '.btn-prev',
            nextEl: '.btn-next'
        },
    });

    initSlider(swiper, progressBar);
}

export function initGallerySlider() {

    const section = document.querySelector('.main-gallery');
    const swiperContainer = section.querySelector('.swiper-container');
    const progressBar = section.querySelector('.slider-progress-bar');

    const swiper = new Swiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        
        navigation: {
            prevEl: '.slider-btn.left',
            nextEl: '.slider-btn.right'
        },
    });

    initSlider(swiper, progressBar);
}



export default function() {

    initMainSlider();
    initTerritorySlider();
    initGallerySlider();

}
