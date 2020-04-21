import "../scss/news.scss";

import LazyLoad from "vanilla-lazyload";

import initGlobals from "./global";

import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";


document.addEventListener('DOMContentLoaded', () => {
    
    initGlobals();

    const lazyLoader = new LazyLoad({
        elements_selector: '[data-bg], [data-src]',
    });

    initContactsForm();
    initContactsMap();
});