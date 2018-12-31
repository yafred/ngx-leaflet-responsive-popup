Example to illustrate how to use leaflet-responsive-popup in Angular @asymmetrik/ngx-leaflet 

# Try this example
  * clone this repository with `git`
  * `cd ngx-leaflet-responsive-popup`
  * `npm install`
  * `npm start`
  * visit http://localhost:4200

# Do it from scratch

## Create a project

`ng new ngx-leaflet-responsive-popup`

## Add dependencies

Update ```package.json```

```json
{
    ...
    "devDependencies": {
        ...
       "@asymmetrik/ngx-leaflet": "~5.0.1",
       "leaflet": "^1.3.1",
       "leaflet-responsive-popup": "^0.6.3",
        ...
    }
    ...
}
```

If you are using Angular CLI, you will need to add the Leaflet CSS files to the styles array contained in ```angular.json```

```json
{
    ...
    "styles": [
        "styles.css",
        "./node_modules/leaflet/dist/leaflet.css",
        "./node_modules/leaflet-responsive-popup/leaflet.responsive.popup.css"
    ],
    ...
}
```

## Install dependencies

  * `cd ngx-leaflet-responsive-popup`
  * `npm install`

## Import ngx-leaflet module

For example, in your ```app.module.ts```

```typescript
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

...
imports: [
    ...
    LeafletModule
]
...
```

## Add a map in component

in ```app.component.html```

```html
<div style="height: 300px;"
     leaflet 
     [leafletOptions]="options">
</div>
```

## Initialize the map

in ```app.component.ts```

```typescript
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
```

## Run the example

`npm start`

