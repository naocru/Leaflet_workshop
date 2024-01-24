var map = L.map('map').setView([55.6760,12.5683], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([55.6760,12.5683]).addTo(map)
		.bindPopup('Leaflet Intro<br> Marker in Copenhagen')
		.openPopup();
var marker = L.marker([56.6760,12.5683]).addTo(map)
		.bindPopup('Leaflet Intro<br> Marker in the sea')
		.openPopup();
var marker = L.marker([57.6760,12.5683]).addTo(map)
		.bindPopup('Leaflet Intro<br> Marker in Sweden')
		.openPopup();	