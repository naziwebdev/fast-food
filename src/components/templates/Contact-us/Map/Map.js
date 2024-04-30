"use client";
import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ position, center, children }) {
  return (
    <div className={styles.map_container}>
      <MapContainer
        className={styles.map}
        center={center}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Set Coffee</Popup>
        </Marker>
      </MapContainer>
      <div className={styles.details}>{children}</div>
    </div>
  );
}
