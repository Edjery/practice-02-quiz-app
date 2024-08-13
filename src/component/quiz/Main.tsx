import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import QuestionSet from "../../values/interface/QuestionSet";
import QuestionSetList from "../../values/questionSet/QuestionSetList";
import {
  animationStyleFadeInDownwards,
  animationStyleFadeInScale,
  backgroundStyleLightGradient,
  centerItem,
} from "../../values/stylingValues";
import Questions from "./Questions";
import Start from "./Start";

const questionSetList = QuestionSetList;

const Main = () => {
  const questionSet: QuestionSet = questionSetList[0];
  const [isVisible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!animate);
  }, [isVisible]);

  const handleClick = useCallback(() => {
    setVisible(!isVisible);
  }, [setVisible, isVisible]);

  return (
    <Box sx={{ ...centerItem, ...backgroundStyleLightGradient(questionSet.background) }}>
      <Box sx={animationStyleFadeInDownwards(isVisible, animate)}>
        <Start quizTitle={questionSet.title} quizDescription={questionSet.description} onClick={handleClick} />
      </Box>
      <Box sx={animationStyleFadeInScale(!isVisible, !animate)}>
        <Questions questionSet={questionSet} />
      </Box>
    </Box>
  );
};

export default Main;
