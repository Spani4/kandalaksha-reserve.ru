import "swiper/css/swiper.min.css";

import Swiper from "swiper";


function initAutoSlide(swiper, progressBar) {

    console.log(swiper);
    let progressBarWidth = 0;

    setInterval(() => {
        
        if ( progressBarWidth === 100 ) {
            progressBarWidth += 0.5;
            // progressBar.style.width = `${progressBarWidth}%`;
            console.log(progressBar);
            swiper.slideNext();
        }
    }, 120);

    // swiper.on('transitionStart', () => {
    //     console.log('tr start');
    //     progressBarWidth = 0;
    //     progressBar.style.width = `${progressBarWidth}%`;
    // });

    // swiper.on('transitionEnd', () => {
    //     console.log('tr end');
    //     progressBarWidth = 0;

    // });
}


export function initMainSlider() {

    const section = document.querySelector('.main-slider');
    const swiperContainer = section.querySelector('.swiper-container');
    const btnPrev = section.querySelector('.slider-btn.left');
    const btnNext = section.querySelector('.slider-btn.right');
    const progressBar = section.querySelector('.progress-bar');


    const swiper = new Swiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        
        navigation: {
            prevEl: btnPrev,
            nextEl: btnNext
        },

        // init: false,
    });

    // swiper.on('init', () => {
    //     initAutoSlide(swiper, progressBar);
    // });

    // swiper.init();


}

export function initTerritorySlider() {

    const section = document.querySelector('.main-territory');
    const swiperContainer = section.querySelector('.swiper-container');
    // const btnPrev = section.querySelectorAll('.btn-prev');
    // const btnNext = section.querySelectorAll('btn-next');

    const swiper = new Swiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        // effect: 'fade',
        
        navigation: {
            prevEl: '.btn-prev',
            nextEl: '.btn-next'
        },

        // fadeEffect: {
        //     crossFade: true,
        // }

    });
}

export function initGallerySlider() {

    const section = document.querySelector('.main-gallery');
    const swiperContainer = section.querySelector('.swiper-container');
    const btnPrev = section.querySelector('.slider-btn.left');
    const btnNext = section.querySelector('.slider-btn.right');

    const swiper = new Swiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        
        navigation: {
            prevEl: btnPrev,
            nextEl: btnNext
        },


    });
}

export default function() {

    initMainSlider();
    initTerritorySlider();
    initGallerySlider();

}
