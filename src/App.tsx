import React from "react";
import "./main.css";

import HeaderBg from "./images/pattern-bg.png";
import ArrowForm from "./images/icon-arrow.svg";

function App() {
  return (
    <>
      <header style={{ backgroundImage: `url(${HeaderBg})` }}>
        <h1>IP Adress Tracker</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button type="submit">
            <img src={ArrowForm} alt="arrow icon" />
          </button>
        </form>
        <div className="content">Text content</div>
      </header>

      <main>
        <div className="map">Map</div>
      </main>
    </>
  );
}

export default App;
