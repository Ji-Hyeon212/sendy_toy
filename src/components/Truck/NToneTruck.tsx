import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import ElevenToneTruck from "./ElevenToneTruck";
import FiveTonePlus from "./FiveTonePlus";
import FiveToneTruck from "./FiveToneTruck";
import OneToneTruck from "./OneToneTruck";
import ThreehalfToneTruck from "./ThreehalfToneTruck";
import TwohalfToneTruck from "./TwohalfToneTruck";

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
        {tone === "1" && <OneToneTruck />}{" "}
        {tone === "2.5" && <TwohalfToneTruck />}{" "}
        {tone === "3.5" && <ThreehalfToneTruck />}{" "}
        {tone === "5" && <FiveToneTruck />}{" "}
        {tone === "5plus" && <FiveTonePlus />}{" "}
        {tone === "11" && <ElevenToneTruck />}
      </FormControl>
    </Stack>
  );
};

export default NToneTruck;
