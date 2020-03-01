import "../scss/routes.scss";

import initHeaderMobile from "./modules/header-mobile";
import initNavMobile from "./modules/nav-mobile";
import collapsibleNav from "./components/collapsible-nav";
import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";


document.addEventListener('DOMContentLoaded', () => {
    
    initNavMobile();
    initHeaderMobile();
    collapsibleNav();
    initContactsForm();
    initContactsMap();
});