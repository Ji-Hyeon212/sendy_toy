import axios from "axios";
import React, { useEffect, useState } from "react";

const REQUEST_URL = "https://api.sendy.ai/guest/fare/predict";
const API_KEY =
  "5cd0fbf6ca11f40e14a632124e94cabe9709752fb1484d137b0ef516d3bb0e25";
const date = new Date();

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
  const [data, setData] = useState({
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
  });

  useEffect(() => {
    let wayPoints: any;
    wayPoints = [
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
    ];
    setData((prevData) => ({
      ...prevData,
      wayPoints,
    }));
  }, [
    props.jibunDeparture,
    props.jibunDestination,
    props.roadDeparture,
    props.roadDestination,
  ]);

  useEffect(() => {
    let pickUpDateTime: string;
    const year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    if (props.transportTime === "주간") {
      pickUpDateTime =
        year +
        "-" +
        (month.length < 2 ? (month = "0" + month) : month) +
        "-" +
        (day.length < 2 ? (day = "0" + day) : day) +
        "T12:00:00";
    } else {
      pickUpDateTime =
        year +
        "-" +
        (month.length < 2 ? (month = "0" + month) : month) +
        "-" +
        (day.length < 2 ? (day = "0" + day) : day) +
        "T22:00:00";
    }

    setData((prevData) => ({
      ...prevData,
      pickUpDateTime,
    }));
  }, [props.transportTime]);

  useEffect(() => {
    let truckInfo: any;

    if (props.carType === "다마스") {
      truckInfo = {
        truckType: "DAMAS",
      };
    } else if (props.carType === "라보") {
      truckInfo = {
        truckType: "LABO",
      };
    } else if (props.carType === "1톤 카고") {
      truckInfo = {
        capacity: 1,
        plus: false,
        truckType: "TRUCK",
        top: false,
        fridge: false,
        freezer: false,
        lift: false,
        horu: false,
        long: false,
        wing: false,
      };
    }

    setData((prevData) => ({
      ...prevData,
      truckInfo,
    }));
  }, [props.carType]);

  useEffect(() => {
    let workType: string;

    if (props.workType === "차량만") {
      workType = "DRIVE";
    } else if (props.workType === "상하차") {
      workType = "LOADING";
    } else if (props.workType === "상하차 및 운반") {
      workType = "CARRY";
    } else if (props.workType === "기사 + 인부 1명") {
      workType = "WITH_WORKER";
    }

    setData((prevData) => ({
      ...prevData,
      workType,
    }));
  }, [props.workType]);

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
  }, [data]);

  return <div>{cost}원</div>;
};

export default Cost;
