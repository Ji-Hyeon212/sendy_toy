import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import ElevenToneTruck from "./ElevenToneTruck";
import FiveTonePlus from "./FiveTonePlus";
import FiveToneTruck from "./FiveToneTruck";
import OneToneTruck from "./OneToneTruck";
import ThreehalfToneTruck from "./ThreehalfToneTruck";
import TwohalfToneTruck from "./TwohalfToneTruck";

interface carProps {
  carType: string;
  setCarType: React.Dispatch<React.SetStateAction<string>>;
}

const NToneTruck = (CarType: carProps) => {
  const [tone, setTone] = useState("1");

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
        {tone === "1" && (
          <OneToneTruck
            carType={CarType.carType}
            setCarType={CarType.setCarType}
          />
        )}{" "}
        {tone === "2.5" && (
          <TwohalfToneTruck
            carType={CarType.carType}
            setCarType={CarType.setCarType}
          />
        )}{" "}
        {tone === "3.5" && (
          <ThreehalfToneTruck
            carType={CarType.carType}
            setCarType={CarType.setCarType}
          />
        )}{" "}
        {tone === "5" && (
          <FiveToneTruck
            carType={CarType.carType}
            setCarType={CarType.setCarType}
          />
        )}{" "}
        {tone === "5plus" && (
          <FiveTonePlus
            carType={CarType.carType}
            setCarType={CarType.setCarType}
          />
        )}{" "}
        {tone === "11" && (
          <ElevenToneTruck
            carType={CarType.carType}
            setCarType={CarType.setCarType}
          />
        )}
      </FormControl>
    </Stack>
  );
};

export default NToneTruck;
