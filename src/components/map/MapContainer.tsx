import { LatLngExpression } from 'leaflet';
import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const CONTAINER_STYLE: string = window && window.require ? '': 'leaflet-web';
const position: LatLngExpression = [60.19, 24.95];

const MapContainer = () => {
  return (
    <Map center={position} minZoom={3} zoom={12} className={CONTAINER_STYLE}
      maxBounds={[ [-90, -170], [90, 190] ]} > {/** +10 horizontal offset */}
      <TileLayer
        
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a class='pr-1' href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>"
      />
      
    </Map>
  );
};

export default MapContainer;

