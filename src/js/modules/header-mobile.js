export default function initHeaderMobile() {

    const headerMobile = document.querySelector('.js-header-mobile');
    const hamburger = headerMobile.querySelector('.js-hamburger');
    const navMobile = headerMobile.querySelector('.js-header-mobile-nav');

    hamburger.addEventListener('click', () => {

        if ( hamburger.classList.contains('close') ) {
            hamburger.classList.remove('close');
            navMobile.classList.add('hidden');
        } else {
            hamburger.classList.add('close');
            navMobile.classList.remove('hidden');
        }
    });
}