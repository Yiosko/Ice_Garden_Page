import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function Mapa({ className }) {
    function UbicacionUsuario() {
        const map = useMap();

        useEffect(() => {
            map.locate({setView: true, maxZoom: 14});
            map.on("locationfound", (e) => {
                L.marker(e.latlng).addTo(map)
                    .bindPopup("¡Estás aquí!")
                    .openPopup();
            });
        }, [map])

        return null;
    }

    const position = [2.937407, -75.291950];

    return (<>
                <div className={ className }>
                <MapContainer center={position} zoom={14} style={{ height: "100%", width: "100%" }}>
                    <UbicacionUsuario />
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        ¡Local Ice Garden! 🗺️

                        Carrera 5a #21a-87
                        - Sevilla
                    </Popup>
                    </Marker>
                </MapContainer>
                </div>
    </>)
}

export default Mapa;