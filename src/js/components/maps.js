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

    const mapEl = document.getElementById('map');

    mapEl.addEventListener('click', (e) => {

        const target = e.target;

        if ( target.classList.contains('circle') ) {

            const circles = mapEl.querySelectorAll('.circle');
            const circlesCoords = [];
            const objectsInRadius = [];

            circles.forEach(elem => {
                const coords = elem.getBoundingClientRect();
                coords.centerX = coords.x + (coords.width / 2);
                coords.centerY = coords.y + (coords.height / 2);
                coords.radius = coords.width / 2;
                circlesCoords.push(coords);
            });

            circlesCoords.forEach(elem => {

                const dX = e.clientX - elem.centerX;
                const dY = e.clientY - elem.centerY;
                const distance = Math.sqrt(dX * dX + dY * dY);

                if ( distance <= elem.radius ) objectsInRadius.push(elem);

            })

            objects.forEach(object => {
                object.circle.bindPopup(`Объектов в радиусе: ${objectsInRadius.length}`);
            });

            // console.log(circles)
            // console.log(circlesCoords)
            // console.log(objectsInRadius)
        }
    }, true);


    objects.forEach(object => {

        const image = object.picture ? `<img src=${object.picture} alt=${object.title} style="width: 100%">` : '';
        const title = object.title ? `<p><strong>${object.title}</strong></p>` : '';
        const text = object.text ? `<span>${object.text}</span>` : '';

        object.popupTemplate = `
            <div style="width: 200px">
                ${image}${title}${text}
            </div>
        `;

        object.coords = object.announce.split(',');

        object.marker = L.marker(object.coords, {icon: L.icon({
            iconUrl: require('../../images/marker-icon.png'),
            iconSize: [28, 44],
            iconAnchor: [14, 44],
        })}).addTo(map);

        object.marker.bindPopup(object.popupTemplate);
        object.marker.id = object.id;

        object.circle = L.circle(object.coords, {
            radius: 50000,
            opacity: 0,
            fillOpacity: 0.05,
            className: 'circle',
        }).addTo(map);
        object.circle.id = object.id;
    });
}



export default {
    initContactsMap,
};