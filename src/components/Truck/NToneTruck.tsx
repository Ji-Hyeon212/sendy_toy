import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import OneToneTruck from "./OneToneTruck";

const NToneTruck = () => {
  const [tone, setTone] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTone(event.target.value as string);
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <FormControl fullWidth>
        <Select
          labelId="trucktone"
          id="trucktone"
          value={tone}
          defaultValue="1"
          // placeholder="1톤 트럭"
          onChange={handleChange}
        >
          <MenuItem value="1">1톤 트럭</MenuItem>
          <MenuItem value="2.5">2.5톤 트럭</MenuItem>
          <MenuItem value="3.5">3.5톤 트럭</MenuItem>
          <MenuItem value="5">5톤 트럭</MenuItem>
          <MenuItem value="5plus">5톤 플러스</MenuItem>
          <MenuItem value="11">11톤</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <OneToneTruck />
      </FormControl>
    </Stack>
  );
};

export default NToneTruck;
