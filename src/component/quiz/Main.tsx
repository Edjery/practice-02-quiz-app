import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import QuestionSet from "../../values/interface/QuestionSet";
import FamousInvention from "../../values/questionSet/FamousInvention";
import {
  animationStyleFade,
  animationStyleFadeInUpwards,
  backgroundStyleLightGradient,
  centerItem,
} from "../../values/stylingValues";
import FamousLandmarks from "../../values/questionSet/FamousLandmarks";
import Start from "./Start";
import QuestionList from "./QuestionsList";

const Main = () => {
  // const questionSet: QuestionSet = FamousInvention;
  const questionSet: QuestionSet = FamousLandmarks;
  const [isVisible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!animate);
  }, [isVisible]);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <Box sx={{ ...centerItem, ...backgroundStyleLightGradient(questionSet.backgrounds) }}>
      <Box sx={animationStyleFadeInUpwards(isVisible, animate)}>
        <Start quizTitle={questionSet.title} quizDescription={questionSet.description} onClick={handleClick} />
      </Box>
      <Box sx={animationStyleFade(!isVisible, !animate)}>
        <QuestionList questionSet={questionSet} />
      </Box>
    </Box>
  );
};

export default Main;
