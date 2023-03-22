import axios from "axios";
import React, { useEffect, useState } from "react";

const REQUEST_URL = "https://api.sendy.ai/route/calculate";
const API_KEY =
  "5cd0fbf6ca11f40e14a632124e94cabe9709752fb1484d137b0ef516d3bb0e25";

interface distanceType {
  // address: string,
  // addressDetail: string,
  // floor: number,
  // jibunAddress: string,
  // useElevator: boolean
  jibunDeparture: string;
  roadDeparture: string;
  jibunDestination: string;
  roadDestination: string;
  setDist: React.Dispatch<React.SetStateAction<string>>;
}

const Distance = ({
  jibunDeparture,
  roadDeparture,
  jibunDestination,
  roadDestination,
  setDist,
}: distanceType) => {
  const [distance, setDistance] = useState("");

  const data = {
    orderVersion: "V_20191212",
    wayPoints: [
      {
        address: roadDeparture,
        addressDetail: "",
        floor: 0,
        jibunAddress: jibunDeparture,
        useElevator: true,
      },
      {
        address: roadDestination,
        addressDetail: "",
        floor: 0,
        jibunAddress: jibunDestination,
        useElevator: true,
      },
    ],
  };

  useEffect(() => {
    axios
      .post(REQUEST_URL, data, {
        headers: {
          apikey: API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data.distance);
        setDistance(response.data.distance);
        setDist(response.data.distance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);
  return <div>{distance}km</div>;
};

export default Distance;
