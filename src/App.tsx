import React, { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./main.css";

import HeaderBg from "./images/pattern-bg.png";
import Form from "./components/Form";

interface DataIp {
  ip: string;
  location: {
    country: string;
    city: string;
    postalCode: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
}

function App() {
  const [data, setData] = useState<DataIp>();
  const [personalIp, setPersonalIp] = useState("");

  const handlePersonalIp = () => {
    const url = "https://api.ipify.org?format=json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPersonalIp(data.ip);
      });
  };

  const handleIpData = (ip: string) => {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_r90OZNhhfW9181kY3VeUD2m1xXvn4&ipAddress=${ip}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    handlePersonalIp();
    handleIpData(personalIp);
  }, []);

  console.log("data: ", data);

  return (
    <>
      <header style={{ backgroundImage: `url(${HeaderBg})` }}>
        <h1>IP Adress Tracker</h1>
        <Form />
        {data && (
          <div className="content">
            <div>
              <h2>ip address</h2>
              <p>{data.ip}</p>
            </div>
            <div>
              <h2>Location</h2>
              <p>
                {data.location.city}, {data.location.country}{" "}
                {data.location.postalCode}
              </p>
            </div>
            <div>
              <h2>Timezone</h2> <p>UTC {data.location.timezone}</p>
            </div>
            <div>
              <h2>isp</h2>
              <p>{data.isp}</p>
            </div>
          </div>
        )}
      </header>
      <main>
        <div className="map">
          {data && (
            <MapContainer
              center={[data.location.lat, data.location.lng]}
              zoom={13}
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[data.location.lat, data.location.lng]} />
            </MapContainer>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
