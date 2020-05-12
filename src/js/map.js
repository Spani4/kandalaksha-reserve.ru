import "../scss/map.scss";

import initGlobals from "./global";
import { initContactsMap, initInteractiveMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";


document.addEventListener('DOMContentLoaded', () => {
    
    
    initGlobals();
    initInteractiveMap();
    initContactsForm();
    initContactsMap();
});