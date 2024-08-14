import { Box, Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuestionSet from "../../values/interface/QuestionSet";
import { homePath } from "../../values/paths";
import { backLabel, menuLabel } from "../../values/string";
import {
  animationStyleFadeInDownwards,
  animationStyleFadeInScale,
  backgroundStyleGradient,
  centerItem,
} from "../../values/stylingValues";
import Questions from "./Questions";
import Start from "./Start";
import ReturnMenuButton from "../common/ReturnMenuButton";

// #TODO make question random every time
const Quiz = () => {
  const navigate = useNavigate();
  const { state }: { state: { questionSet: QuestionSet } } = useLocation();
  const [isVisible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  const questionSet: QuestionSet = state.questionSet || { questionSet: [] };

  useEffect(() => {
    setAnimate(!animate);
    if (!questionSet || questionSet.questions.length <= 0) {
      navigate(homePath);
    }
  }, [isVisible, questionSet]);

  const handleClick = useCallback(() => {
    setVisible(!isVisible);
  }, [setVisible, isVisible]);

  return (
    <Box sx={{ ...centerItem, ...backgroundStyleGradient(questionSet.background) }}>
      <ReturnMenuButton />
      <Box sx={animationStyleFadeInDownwards(isVisible, animate)}>
        <Start quizTitle={questionSet.title} quizDescription={questionSet.description} onClick={handleClick} />
      </Box>
      <Box sx={animationStyleFadeInScale(!isVisible, !animate)}>
        <Questions questionSet={questionSet} />
      </Box>
    </Box>
  );
};

export default Quiz;
