import { FC } from "react";

interface Props {
  ip: string;
  country: string;
  city: string;
  postalCode: string;
  timezone: string;
  isp: string;
}

const IpValue: FC<Props> = ({
  ip,
  country,
  city,
  postalCode,
  timezone,
  isp,
}) => {
  return (
    <div className="content">
      <div>
        <h2>ip address</h2>
        <p>{ip}</p>
      </div>
      <div>
        <h2>Location</h2>
        <p>
          {city}, {country} {postalCode}
        </p>
      </div>
      <div>
        <h2>Timezone</h2> <p>UTC {timezone}</p>
      </div>
      <div>
        <h2>isp</h2>
        <p>{isp}</p>
      </div>
    </div>
  );
};

export default IpValue;
