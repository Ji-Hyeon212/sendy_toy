import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const OneToneTruck = () => {
  const [type, setType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <Select
      labelId="trucktype"
      id="trucktype"
      value={type}
      defaultValue="horu"
      placeholder="방수 덮개(호루)"
      onChange={handleChange}
    >
      <MenuItem value="horu">방수 덮개(호루)</MenuItem>
      <MenuItem value="top">탑차</MenuItem>
      <MenuItem value="wing">윙바디</MenuItem>
      <MenuItem value="lift">리프트</MenuItem>
      <MenuItem value="fridge">냉장</MenuItem>
      <MenuItem value="freezer">냉동</MenuItem>
    </Select>
  );
};

export default OneToneTruck;
