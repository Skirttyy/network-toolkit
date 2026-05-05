import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ChangeView({ lat, lon }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon], 9);
  }, [lat, lon, map]);

  return null;
}

export default function Map({ lat, lon, city }) {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={9}
      className="map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <ChangeView lat={lat} lon={lon} />

      <Marker position={[lat, lon]}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
}