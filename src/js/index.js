import "../scss/main.scss";

import collapsibleNav from "./components/collapsible-nav";

import { initMainPageMap } from "./components/maps";

document.addEventListener('DOMContentLoaded', () => {
    
    collapsibleNav();
    initMainPageMap();

});