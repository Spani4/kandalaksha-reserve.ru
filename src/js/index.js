import "../scss/main.scss";

import collapsedNav from "./components/collapsed-nav";

import { initMainPageMap } from "./components/maps";

document.addEventListener('DOMContentLoaded', () => {
    
    collapsedNav();
    initMainPageMap();

});