import "../scss/museum.scss";

import initHeaderMobile from "./modules/header-mobile";
import initNavMobile from "./modules/nav-mobile";
import collapsibleNav from "./components/collapsible-nav";
import { initContactsMap } from "./components/maps";


document.addEventListener('DOMContentLoaded', () => {
    
    initNavMobile();
    initHeaderMobile();
    collapsibleNav();
    initContactsMap();
});