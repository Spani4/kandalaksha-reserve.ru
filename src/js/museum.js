import "../scss/museum.scss";

import initGlobals from "./global";
import { initContactsMap } from "./components/maps";
import initContactsForm from "./components/contacts-form";


document.addEventListener('DOMContentLoaded', () => {
    
    initGlobals();
    initContactsForm();
    initContactsMap();
});