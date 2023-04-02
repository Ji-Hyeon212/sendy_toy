import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

const FiveTonePlus = ({ setCarType }: any) => {
  const [type, setType] = useState("5톤 플러스 카고");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
    setCarType(event.target.value as string);
  };

  return (
    <Select
      labelId="trucktype"
      id="trucktype"
      value={type}
      defaultValue="5톤 플러스 카고"
      onChange={handleChange}
    >
      <MenuItem value="5톤 플러스 카고">카고</MenuItem>
      <MenuItem value="5톤 플러스 탑차">탑차</MenuItem>
      <MenuItem value="5톤 플러스 윙바디">윙바디</MenuItem>
      <MenuItem value="5톤 플러스 냉장">냉장</MenuItem>
      <MenuItem value="5톤 플러스 냉동">냉동</MenuItem>
    </Select>
  );
};

export default FiveTonePlus;
