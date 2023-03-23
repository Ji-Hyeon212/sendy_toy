import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

const ThreehalfToneTruck = () => {
  const [type, setType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <Select
      labelId="trucktype"
      id="trucktype"
      value={type}
      defaultValue="cargo"
      placeholder="카고"
      onChange={handleChange}
    >
      <MenuItem value="cargo">카고</MenuItem>
      <MenuItem value="top">탑차</MenuItem>
      <MenuItem value="wing">윙바디</MenuItem>
      <MenuItem value="fridge">냉장</MenuItem>
      <MenuItem value="freezer">냉동</MenuItem>
    </Select>
  );
};

export default ThreehalfToneTruck;
