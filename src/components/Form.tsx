import React from "react";
import ArrowForm from "../images/icon-arrow.svg";

const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("oui");
      }}
    >
      <input type="text" placeholder="Search for any IP address or domain" />
      <button type="submit">
        <img src={ArrowForm} alt="arrow icon" />
      </button>
    </form>
  );
};

export default Form;
