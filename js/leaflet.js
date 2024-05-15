
document.addEventListener("DOMContentLoaded", function() {
var map = L.map('map').setView([50.8503, 4.3517], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.8503, 4.3517]).addTo(map)
    .bindPopup('Random markering, Belgium')
    .openPopup();
});
