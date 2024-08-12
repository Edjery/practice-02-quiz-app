import { Box } from "@mui/material";
import { useState } from "react";
import { flowersLikeEyes } from "../values/colors";
import { centerItem } from "../values/stylingValues";
import Start from "./quiz/Start";
import Stepper from "./quiz/Stepper";

const MainPage = () => {
  const [notStarted, setStart] = useState(true);
  const handleClick = () => {
    setStart(!notStarted);
  };

  return (
    <Box sx={{ ...centerItem, bgcolor: flowersLikeEyes.purpleHaze }}>
      <Box sx={{ display: notStarted ? "flex" : "none" }}>
        <Start onClick={handleClick} />
      </Box>
      <Box sx={{ display: notStarted ? "none" : "flex" }}>
        <Stepper />
      </Box>
    </Box>
  );
};

export default MainPage;
