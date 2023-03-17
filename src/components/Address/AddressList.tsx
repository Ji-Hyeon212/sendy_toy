import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

interface addressType {
  roadAddr: String;
  jibunAddr: String;
}

const index = [0, 1, 2, 3, 4];
const AddressList = ({ addresses }: any) => {
  return (
    <div>
      {addresses.map(({ roadAddr, jibunAddr }: addressType) => {
        return (
          <div key={index.toString()} onClick={() => {}}>
            <Box sx={{ borderColor: "#f3f3f3" }}>
              <Typography variant="body2">{roadAddr}</Typography>
              <Typography variant="body2">{jibunAddr}</Typography>
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default AddressList;
