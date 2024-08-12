import { Box } from "@mui/material";
import { useState } from "react";
import { flowersLikeEyes } from "../values/colors";
import { centerItem } from "../values/stylingValues";
import QuizStart from "./QuizStart";
import QuizStepper from "./QuizStepper";
import QuizResult from "./QuizResult";

const MainPage = () => {
  const [notStarted, setStart] = useState(true);
  const handleClick = () => {
    setStart(!notStarted);
  };

  const score = "10/10";
  const message = "Congratulations! You pass with flying colors!";

  return (
    <Box sx={{ ...centerItem, bgcolor: flowersLikeEyes.purpleHaze }}>
      <QuizResult score={score} message={message} />
      {/* <Box sx={{ display: notStarted ? "flex" : "none" }}>
        <QuizStart onClick={handleClick} />
      </Box>
      <Box sx={{ display: notStarted ? "none" : "flex" }}>
        <QuizStepper />
      </Box> */}
    </Box>
  );
};

export default MainPage;
