console.log('Hello World')

import mapboxgl from "mapbox-gl";
import {createMarker} from "./marker.js"

mapboxgl.accessToken = "pk.eyJ1Ijoia2htY2hvaSIsImEiOiJja2h1c3RsZjMwd3M4MnpvY2doaXdqcnplIn0.XZA0DBqbGTfYBi_Ks5TPGw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// CREATE DOM element for marker:
// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const marker = new mapboxgl.Marker(createMarker(type, long, lat))
// .setLngLat([long, lat])
// .addTo(map);

const hotelMarker = new mapboxgl.Marker(createMarker("restaurants", [-74.009, 40.705]))
.setLngLat([-74.009, 40.705])
.addTo(map);


