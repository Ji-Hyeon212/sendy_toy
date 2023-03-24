import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

const ElevenToneTruck = ({ setCarType }: any) => {
  const [type, setType] = useState("11톤 카고");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
    setCarType(event.target.value as string);
  };

  return (
    <Select
      labelId="trucktype"
      id="trucktype"
      value={type}
      defaultValue="11톤 카고"
      onChange={handleChange}
    >
      <MenuItem value="11톤 카고">카고</MenuItem>
      <MenuItem value="11톤 윙바디">윙바디</MenuItem>
      <MenuItem value="11통 장축">장축</MenuItem>
    </Select>
  );
};

export default ElevenToneTruck;
