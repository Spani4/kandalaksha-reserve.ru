import "../scss/gallery.scss";

import LazyLoad from "vanilla-lazyload";

import initHeaderMobile from "./modules/header-mobile";
import initNavMobile from "./modules/nav-mobile";
import collapsibleNav from "./components/collapsible-nav";
import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";


document.addEventListener('DOMContentLoaded', () => {
    
    initNavMobile();
    initHeaderMobile();
    collapsibleNav();

    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initContactsForm();
    initContactsMap();
});