import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import or define your department data here
const departments = [
  { id: 1, name: 'Ain', lat: 46.2065, lng: 5.344 },
  { id: 2, name: 'Aisne', lat: 49.6032, lng: 3.2076 },
  { id: 3, name: 'Allier', lat: 46.1588, lng: 3.1501 },
  // add all other departments
  { id: 95, name: "Val-d'Oise", lat: 49.0508, lng: 2.1571 },
];

const MapPage: React.FC = () => {
  return (
    <MapContainer
      center={[46.6034, 1.8883]}
      zoom={5}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {departments.map((department) => (
          <Marker
            key={department.id}
            position={[department.lat, department.lng]}
            icon={L.icon({
              iconUrl:
                'https://img.icons8.com/material-outlined/24/000000/marker.png', // Change to your icon URL
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })}
          >
            <Popup>{department.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapPage;
