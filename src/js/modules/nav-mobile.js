export default function initNavMobile() {

    const navMobile = document.querySelector('.js-nav-mobile');
    const items = navMobile.querySelectorAll('.js-item');
    const links = navMobile.querySelectorAll('.js-link');

    items.forEach((item) => {

        if ( item.querySelector('.js-list') ) item.classList.add('container');

        item.addEventListener('click', (e) => {

            
            const target = e.target.closest('.js-item');
            
            // const item = link.closest('.js-item');
            target.classList.toggle('active');
            console.log(target);
            e.stopPropagation();
        });
    });

    // links.forEach((link) => {
    //     link.addEventListener('click', (e) => {
    //         const item = link.closest('.js-item');
    //         item.classList.toggle('active');
    //     });
    // });

}