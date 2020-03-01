export default {

    main: {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        
        navigation: {
            prevEl: '.slider-btn.left',
            nextEl: '.slider-btn.right'
        },
    },

    news: {
        slidesPerView: 1,
        speed: 500,
        loop: true,

        navigation: {
            prevEl: '.main-news .btn-prev',
            nextEl: '.main-news .btn-next'
        },

        breakpoints: {
            769: {
                allowTouchMove: false,
                slidesPerView: 3,
                spaceBetween: 10,
            },
            992: {
                allowTouchMove: false,
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
    },

    territory: {
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        effect: 'fade',

        fadeEffect: {
            crossFade: true
        },
        
        navigation: {
            prevEl: '.main-territory .btn-prev',
            nextEl: '.main-territory .btn-next'
        },
    },

    gallery: {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        
        navigation: {
            prevEl: '.slider-btn.left',
            nextEl: '.slider-btn.right'
        },
    },

    album: {
        slidesPerView: 1,
        speed: 400,
        init: false,
        
        navigation: {
            prevEl: '.slider-btn.left',
            nextEl: '.slider-btn.right',
            disabledClass: 'disabled',
        },

        on: {
            init: function() {
                this.ready = true;
            },
        },
    },
};