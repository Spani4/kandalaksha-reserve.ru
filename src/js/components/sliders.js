import "swiper/css/swiper.min.css";

import Swiper from "swiper";

export function initMainSlider() {

    const section = document.querySelector('.main-slider');
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

        autoplay: {
            delay: 7000,
        },
    });
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
