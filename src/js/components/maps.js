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



export function initInteractiveMap() {

    const coords = [67.133085, 32.417791];

    const map = L.map('map').setView(coords, 13);
    
    const boundaries = [
        [66.636746, 29.377572], [66.654167, 31.618783], [66.367509, 31.817870],
        [66.343945, 32.344568], [66.577251, 32.568819], [66.588266, 33.076929],
        [65.932407, 38.752294], [66.395963, 40.671517], [67.350630, 42.167179],
        [69.167533, 36.760384], [70.003857, 32.169622], [70.003857, 32.169622],
        [69.776192, 30.849740], [68.900223, 28.454721], [68.135879, 28.674448],
        [67.681397, 30.036752], [66.952751, 29.069955], [66.636746, 29.377572],
    ];
    
    L.tileLayer('https://tilessputnik.ru/{z}/{x}/{y}.png?from_api=v0.3', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const polyline = L.polyline(boundaries, {color: ('#FFA800'), opacity: 0.5, fillOpacity: 0.1, fill: true}).addTo(map);
    map.fitBounds(polyline.getBounds());


    fetch('/api/pages/pages/8955479ab4bb3dffd990730d1fb23f06/subpages')
        .then(response => response.json())
        .then(result => setMarkers(map, result._embedded.items))
        .catch(error => console.error(error));

}

function setMarkers(map, objects) {


    objects.forEach(object => {

        const popupTemplate = `
            <div style="width: 200px">
                <img src=${object.picture} alt=${object.title} style="width: 100%">
                <p><strong>${object.title}</strong></p>
                <span>${object.text}</span>
            </div>
        `;

        const coords = object.announce.split(',');

        const marker = L.marker(coords, {icon: L.icon({
            iconUrl: require('../../images/marker-icon.png'),
            iconSize: [28, 44],
            iconAnchor: [14, 44],
        })}).addTo(map);

        marker.bindPopup(popupTemplate);
    });
}



export default {
    initContactsMap,
};