import React, { FC } from "react";
import { MapContainer, Marker, TileLayer, MapConsumer } from "react-leaflet";

interface Props {
  lat: number;
  lng: number;
  setMap: React.Dispatch<React.SetStateAction<any>>;
  map: any;
}

const Map: FC<Props> = ({ lat, lng, setMap, map }) => {
  return (
    <div>
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        zoomControl={false}
        whenCreated={(map) => setMap({ map })}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} />
        <MapConsumer>
          {(map) => {
            const coords = map.getCenter();
            if (coords.lat !== lat) {
              map.flyTo([lat, lng], 13, {
                duration: 2,
              });
            }
            return null;
          }}
        </MapConsumer>
      </MapContainer>
    </div>
  );
};

export default Map;
