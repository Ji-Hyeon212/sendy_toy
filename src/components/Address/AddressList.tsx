import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

interface addressType {
  roadAddr: String;
  jibunAddr: String;
}

const AddressList = ({
  addresses,
  setAddresses,
  setRoad,
  setJibun,
  isConfirmed,
}: any) => {
  return (
    <div>
      {addresses.map(({ roadAddr, jibunAddr }: addressType, index: number) => {
        return (
          <div
            key={index}
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
