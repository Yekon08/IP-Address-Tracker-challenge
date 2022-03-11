import React, { useState, useEffect } from "react";
import "./main.css";

import HeaderBg from "./images/pattern-bg.png";
import Form from "./components/Form";
import Map from "./components/Map";
import IpValue from "./components/IpValue";

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
  const [ipAddress, setIpAddress] = useState("");
  const [map, setMap] = useState<any>();

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

  return (
    <>
      <header style={{ backgroundImage: `url(${HeaderBg})` }}>
        <h1>IP Adress Tracker</h1>
        {data && (
          <Form
            ip={ipAddress}
            setIp={setIpAddress}
            handleIpDate={handleIpData}
          />
        )}
        {data && (
          <IpValue
            ip={data.ip}
            city={data.location.city}
            country={data.location.country}
            postalCode={data.location.postalCode}
            timezone={data.location.timezone}
            isp={data.isp}
          />
        )}
      </header>
      <main>
        <div className="map">
          {data && (
            <Map
              lat={data.location.lat}
              lng={data.location.lng}
              setMap={setMap}
              map={map}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
