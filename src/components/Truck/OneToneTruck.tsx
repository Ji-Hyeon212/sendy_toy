import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

const OneToneTruck = ({ CarType, setCarType }: any) => {
  const [type, setType] = useState("1톤 방수 덮개(호루)");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
    setCarType(event.target.value as string);
    console.log(type);
    console.log(event.target.value as string);
  };

  return (
    <Select
      labelId="trucktype"
      id="trucktype"
      value={type}
      defaultValue="1톤 방수 덮개(호루)"
      onChange={handleChange}
    >
      <MenuItem value="1톤 방수 덮개(호루)">방수 덮개(호루)</MenuItem>
      <MenuItem value="1톤 탑차">탑차</MenuItem>
      <MenuItem value="1톤 윙바디">윙바디</MenuItem>
      <MenuItem value="1톤 리프트">리프트</MenuItem>
      <MenuItem value="1톤 냉장">냉장</MenuItem>
      <MenuItem value="1톤 냉동">냉동</MenuItem>
    </Select>
  );
};

export default OneToneTruck;
