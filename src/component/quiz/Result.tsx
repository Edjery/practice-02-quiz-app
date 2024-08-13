import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { flowersLikeEyes } from "../../values/colors";
import feedback from "../../values/feedback";
import QuestionSet from "../../values/interface/QuestionSet";
import { backLabel, emptyResultMessage, resultLabel } from "../../values/string";
import { centerItem } from "../../values/stylingValues";
import CenterBox from "../common/CenterBox";
import CenterContainer from "../common/CenterContainer";

const Result = () => {
  const { state } = useLocation();
  const answerList: string[] = state?.answerList || [];
  const questionSet: QuestionSet = state?.questionSet;

  const totalQuestions = questionSet?.questions.length || 0;
  const score = questionSet
    ? questionSet.questions.reduce((prev, question, index) => prev + (question.correctAnswer.includes(answerList[index]) ? 1 : 0), 0)
    : 0;

  const percentage = totalQuestions ? (score / totalQuestions) * 100 : 0;
  const currentFeedback = feedback.sort((a, b) => b.minPercentage - a.minPercentage).find((item) => item.minPercentage <= percentage);

  const message = currentFeedback
    ? `${percentage !== 100 ? `${percentage.toFixed(0)}% ` : ""}${currentFeedback.message}`
    : `${percentage.toFixed(0)}%`;
  const scoreText = `Score: ${score}/${totalQuestions}`;

  return (
    <Box sx={{ ...centerItem, bgcolor: flowersLikeEyes.purpleHaze }}>
      <CenterContainer>
        <CenterBox>
          {questionSet ? (
            <Box>
              {/* add custom icon for result */}
              <Typography variant="h5" mb="40px">
                {resultLabel}
              </Typography>
              <Typography variant="h6" fontWeight="bold" mb="20px">
                {scoreText}
              </Typography>
              <Typography variant="h6">{message}</Typography>
            </Box>
          ) : (
            <Box>
              <Typography variant="h5" fontWeight="bold" mb="60px">
                {emptyResultMessage}
              </Typography>
              <Link to="/">
                <Button variant="contained">{backLabel}</Button>
              </Link>
            </Box>
          )}
        </CenterBox>
      </CenterContainer>
    </Box>
  );
};

export default Result;
