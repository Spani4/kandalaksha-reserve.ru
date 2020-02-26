export default function initNavMobile() {

    const navMobile = document.querySelector('.js-nav-mobile');
    const items = navMobile.querySelectorAll('.js-item');
    const links = navMobile.querySelectorAll('.js-link');

    items.forEach((item) => {
        if ( item.querySelector('.js-list') ) item.classList.add('container');
    });

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            const item = link.closest('.js-item');
            item.classList.toggle('active');
        });
    });

}