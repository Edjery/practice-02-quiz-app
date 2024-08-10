import { Box } from "@mui/material";
import { useState } from "react";
import { flowersLikeEyes } from "../values/colors";
import { centerItem } from "../values/stylingValues";
import QuizStart from "./QuizStart";
import QuizStepper from "./QuizStepper";

const MainPage = () => {
  const [notStarted, setStart] = useState(true);
  const handleClick = () => {
    setStart(!notStarted);
  };

  return (
    <Box sx={{ ...centerItem, bgcolor: flowersLikeEyes.purpleHaze }}>
      <Box sx={{ display: notStarted ? "flex" : "none" }}>
        <QuizStart onClick={handleClick} />
      </Box>
      <Box sx={{ display: notStarted ? "none" : "flex" }}>
        <QuizStepper />
      </Box>
    </Box>
  );
};

export default MainPage;
