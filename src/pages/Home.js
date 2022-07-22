import React, { useState, useRef, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

const Home = () => {
  const [sliderValue, setSliderValue] = useState(100);
  const [, setForceUpdate] = useState(Date.now());
  const [, updateState] = useState();

  const forceUpdate = useCallback(() => updateState({}), []);
  const forceDateUpdate = useCallback(() => setForceUpdate(), []);

  const counterRef = useRef({
    counter: 0,
  });

  const loopRef = useRef();

  let i = 0;
  const counterHandler = () => {
    i++;
    loopRef.current.innerHTML = i;
  };

  console.log(counterRef.current.counter);
  console.log(sliderValue);
  // console.log("Home rendered")

  return (
    <div style={{ filter: `brightness(${sliderValue}%)` }}>
      <Box sx={{ width: 300, mt: "25px", mx: "auto" }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <NightsStayIcon />
          <Slider
            aria-label="Volume"
            min={10}
            max={100}
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
          />
          <LightModeIcon />
        </Stack>
      </Box>
      <div
        style={{ textAlign: "center", cursor: "pointer", marginTop: "25px" }}
        ref={loopRef}
        onClick={() => counterHandler()}
      >
        0
      </div>
    </div>
  );
};

export default Home;
