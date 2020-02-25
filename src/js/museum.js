import "../scss/museum.scss";

import initHeaderMobile from "./modules/header-mobile";
import collapsibleNav from "./components/collapsible-nav";
import { initContactsMap } from "./components/maps";


document.addEventListener('DOMContentLoaded', () => {
    
    initHeaderMobile();
    collapsibleNav();
    initContactsMap();
});