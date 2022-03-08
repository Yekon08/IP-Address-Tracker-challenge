import React, { useState, useEffect } from "react";
import "./main.css";

import HeaderBg from "./images/pattern-bg.png";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState(null);
  const [personalIp, setPersonalIp] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handlePersonalIp = () => {
    setLoading(true);
    const url = "https://api.ipify.org?format=json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPersonalIp(data.ip);
        setLoading(false);
      });
  };

  const handleIpData = (ip: string) => {
    setLoading(true);
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_r90OZNhhfW9181kY3VeUD2m1xXvn4&ipAddress=${ip}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
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
        <div className="content">Text content</div>
      </header>
      <main>
        <div className="map">Map</div>
      </main>
    </>
  );
}

export default App;
