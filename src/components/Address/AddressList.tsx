import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

interface addressType {
  roadAddr: String;
  jibunAddr: String;
}

const index = [0, 1, 2, 3, 4];
const AddressList = ({
  addresses,
  setAddresses,
  setRoad,
  setJibun,
  isConfirmed,
}: any) => {
  return (
    <div>
      {addresses.map(({ roadAddr, jibunAddr }: addressType) => {
        return (
          <div
            key={index.toString()}
            onClick={() => {
              setRoad(roadAddr);
              setJibun(jibunAddr);
              isConfirmed(true);
              setAddresses([]);
            }}
          >
            <Typography variant="body2">
              <b>{roadAddr}</b>
            </Typography>
            <Typography variant="body2">{jibunAddr}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default AddressList;
