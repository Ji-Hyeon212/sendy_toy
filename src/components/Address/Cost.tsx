import axios from "axios";
import React, { useEffect, useState } from "react";

const REQUEST_URL = "https://api.sendy.ai/guest/fare/predict";
const API_KEY =
  "5cd0fbf6ca11f40e14a632124e94cabe9709752fb1484d137b0ef516d3bb0e25";

interface costType {
  distance: string;
  carType: string;
  transportTime: string;
  jibunDeparture: string;
  roadDeparture: string;
  jibunDestination: string;
  roadDestination: string;
  workType: string;
}

const Cost = (props: costType) => {
  const [cost, setCost] = useState("");
  const data = {
    distance: props.distance,
    pickUpDateTime: "2023-03-21T12:00:00",
    truckInfo: {
      truckType: "LABO",
    },
    wayPoints: [
      {
        address: props.roadDeparture,
        addressDetail: "",
        floor: 0,
        jibunAddress: props.jibunDeparture,
        useElevator: true,
      },
      {
        address: props.roadDestination,
        addressDetail: "",
        floor: 0,
        jibunAddress: props.jibunDestination,
        useElevator: true,
      },
    ],
    workType: "LOADING",
  };

  useEffect(() => {
    axios
      .post(REQUEST_URL, data, {
        headers: {
          apikey: API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data.data.fare);
        setCost(response.data.data.fare);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cost]);

  return <div>{cost}원</div>;
};

export default Cost;
