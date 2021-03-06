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
        // effect: 'fade',
        allowTouchMove: false,

        // fadeEffect: {
        //     crossFade: true
        // },
        
        navigation: {
            prevEl: '.main-territory .btn-prev',
            nextEl: '.main-territory .btn-next'
        },
    },

    territoryInner: {
        loop: true,
        slidesPerView: 1,
        speed: 400,
        slideClass: 'swiper-inner-slide',
        nested: true,
    },

    gallery: {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        
        navigation: {
            prevEl: '.slider-btn.left',
            nextEl: '.slider-btn.right',
            disabledClass: 'disabled',
        },
    },

    thumbs: {
        slidesPerView: 3,
        speed: 300,
        spaceBetween: 10,
        slideClass: 'thumbs-item',

        breakpoints: {

            769: {
                spaceBetween: 20,
            },
        },
    },

    pages: {

        slidesPerView: 1,
        speed: 400,
        spaceBetween: 10,

        navigation: {
            prevEl: '.pages__photos .slider-btn.left',
            nextEl: '.pages__photos .slider-btn.right',
            disabledClass: 'disabled',
        },

        breakpoints: {
            586: {
                slidesPerView: 2,
            },
            769: {
                slidesPerView: 2,
            },
            850: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },

        },
    },

    popup: {
        slidesPerView: 1,
        speed: 400,
        init: false,
        
        navigation: {
            prevEl: '.popup-slider .slider-btn.left',
            nextEl: '.popup-slider .slider-btn.right',
            disabledClass: 'disabled',
        },

        on: {
            init: function() {
                this.ready = true;
            },
        },
    },
};