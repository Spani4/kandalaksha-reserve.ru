import "leaflet/dist/leaflet.css";

import L from "leaflet/dist/leaflet";


export function initContactsMap() {
    const map = L.map('main-map').setView([67.133085, 32.417791], 13);
    
    L.tileLayer('https://tilessputnik.ru/{z}/{x}/{y}.png?from_api=v0.3', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    const marker = L.marker([67.133085, 32.417791], {icon: L.icon({
        iconUrl: require('../../images/marker-icon.png'),
        iconSize: [32, 48],
        iconAnchor: [16, 48],

    })}).addTo(map);
    marker.bindPopup("Мурманская область, г. Кандалакша, ул. Линейная, д.35").openPopup();
}

export default {
    initContactsMap,
};