import { Component } from '@angular/core';

import { latLng, marker, tileLayer } from 'leaflet';
import { responsivePopup } from 'leaflet-responsive-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-leaflet-responsive-popup';

  aPopup = responsivePopup().setContent('A pretty CSS3 responsive popup.<br> Easily customizable.');
  aMarker = marker([46.879966, -121.726909]).bindPopup(this.aPopup);
  
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      this.aMarker
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
}
