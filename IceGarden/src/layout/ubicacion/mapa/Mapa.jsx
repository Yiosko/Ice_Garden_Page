import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 👇 Este componente mueve la vista del mapa cuando cambia la ubicación
function CambioDeUbicacion({ ubicacion }) {
  const map = useMap();

  useEffect(() => {
    if (ubicacion) {
      // flyTo hace una animación suave hacia la nueva posición
      map.flyTo(ubicacion, 14, { duration: 1.5 });
    }
  }, [ubicacion, map]);

  return null;
}

function UbicacionUsuario() {
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 14 });
    const onLocationFound = (e) => {
      L.marker(e.latlng).addTo(map).bindPopup("¡Estás aquí!").openPopup();
    };

    map.on("locationfound", onLocationFound);

    return () => {
      map.off("locationfound", onLocationFound);
    };
  }, [map]);

  return null;
}

function Mapa({ className, ubicacion, description }) {
  const position = ubicacion;

  return (
    <div className={className}>
      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <UbicacionUsuario />
        {/* 👇 Este componente detecta cambios de ubicación */}
        <CambioDeUbicacion ubicacion={ubicacion} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapa;
