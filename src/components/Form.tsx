import React, { FC } from "react";
import ArrowForm from "../images/icon-arrow.svg";

interface Props {
  ip: string;
  setIp: React.Dispatch<React.SetStateAction<string>>;
  handleIpDate: (ip: string) => void;
  map?: object | any;
}

const Form: FC<Props> = ({ ip, setIp, handleIpDate }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleIpDate(ip);
      }}
    >
      <input
        type="text"
        value={ip}
        placeholder="Search for any IP address or domain"
        onChange={(e) => setIp(e.target.value)}
      />
      <button type="submit">
        <img src={ArrowForm} alt="arrow icon" />
      </button>
    </form>
  );
};

export default Form;
