export default function initHeaderMobile() {
    
    console.log('header-mobile');

    const headerMobile = document.querySelector('.js-header-mobile');
    const hamburger = headerMobile.querySelector('.js-hamburger');

    hamburger.addEventListener('click', () => {

        if ( hamburger.classList.contains('close') ) hamburger.classList.remove('close');
        else hamburger.classList.add('close');
    });
}