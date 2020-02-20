const nav = document.querySelector('.js-nav');
const visibleNav = nav.querySelector('.js-general-nav');
const collapsedNav = nav.querySelector('.js-collapsed-nav');
const btn = nav.querySelector('.js-collapsed-btn');
const items = [...collapsedNav.children];


function popItem() {

    collapsedNav.prepend(visibleNav.lastElementChild);
}

function pushItem(item = null) {
    
    if ( item !== null ) {
        visibleNav.append(item);
    } else if ( collapsedNav.children.length !== 0 ) {
        visibleNav.append(collapsedNav.firstElementChild);
    }
}

function adjustItems() {
    items.forEach(item => {
        if ( nav.offsetWidth - btn.offsetWidth - visibleNav.offsetWidth > 150) {
            pushItem(item);
        }
        // pushItem(item);
    });
}

function adjustBtn() {

    if ( collapsedNav.children.length === 0) {
        btn.classList.add('hidden');
    } else {
        btn.classList.remove('hidden');
    }
}

function checkNavContent() {

    if ( nav.offsetWidth - btn.offsetWidth - visibleNav.offsetWidth <= 150) {

        if ( visibleNav.children.length === 0 ) return;
        popItem();
        checkNavContent();
    } else {
        pushItem();
    }

    adjustBtn();
}

function handleResize() {

    checkNavContent();
}


export default function() {

    adjustItems();
    adjustBtn();

    window.addEventListener('resize', () => {
        handleResize();
    });

}