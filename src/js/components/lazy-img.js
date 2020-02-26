function replaceBgImage(elem) {
    elem.style.backgroundImage = elem.dataset.bgImg;
    elem.removeAttribute('data-bg-img');
    // console.log(elem.style.backgroundImage);
}

export default function initLazyImages() {

    let lazyBgImages = [...document.querySelectorAll('[data-bg-img]')];

    // console.log(lazyBgImages);

    lazyBgImages.forEach(el => {

        if ( el.getBoundingClientRect().top < document.documentElement.clientHeight * 2 ) {
            replaceBgImage(el);
            lazyBgImages = lazyBgImages.filter( item => item !== el );
            // console.log(lazyBgImages);
        }
    });

    window.addEventListener('scroll', function loadLazy() {
        
        lazyBgImages.forEach(el => {
            if ( el.getBoundingClientRect().top < document.documentElement.clientHeight * 2 ) {
                replaceBgImage(el);
                lazyBgImages = lazyBgImages.filter( item => item !== el );
                // console.log(lazyBgImages);
            }
        });

        if ( lazyBgImages.length === 0 ) window.removeEventListener('scroll', loadLazy);
    });
}

