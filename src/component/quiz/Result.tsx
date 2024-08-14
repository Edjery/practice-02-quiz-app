import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import feedback from "../../values/feedback";
import { cupcakeIcon } from "../../values/icon";
import QuestionSet from "../../values/interface/QuestionSet";
import { homePath, quizPath } from "../../values/paths";
import { backLabel, resultLabel, retryLabel } from "../../values/string";
import { animationStyleFadeInScale, backgroundStyleGradient, centerItem } from "../../values/stylingValues";
import CenterBox from "../common/CenterBox";
import CenterContainer from "../common/CenterContainer";

const Result = () => {
  const navigate = useNavigate();
  const { state }: { state: { questionSet: QuestionSet; answerList: string[] } } = useLocation();
  const [animate, setAnimate] = useState(false);
  const answerList = state?.answerList || [];
  const questionSet = state?.questionSet || { questions: [] };

  useEffect(() => {
    setAnimate(true);
    if (!questionSet || !questionSet.questions.length) {
      navigate(homePath);
    }
  });

  const totalQuestions = questionSet.questions.length;
  const score = questionSet.questions.reduce(
    (acc, question, index) => acc + (question.correctAnswer.includes(answerList[index]) ? 1 : 0),
    0
  );

  const percentage = totalQuestions ? (score / totalQuestions) * 100 : 0;
  const currentFeedback = feedback
    .sort((a, b) => b.minPercentage - a.minPercentage)
    .find((item) => item.minPercentage <= percentage);

  const scoreText = `Score: ${score}/${totalQuestions}`;
  const message = currentFeedback
    ? `${percentage !== 100 ? `${percentage.toFixed(0)}% ` : ""}${currentFeedback.message}`
    : `${percentage.toFixed(0)}%`;

  return (
    <Box sx={{ ...centerItem, ...backgroundStyleGradient(questionSet.background) }}>
      <Box sx={{ ...animationStyleFadeInScale(true, animate) }}>
        <CenterContainer>
          <CenterBox>
            {questionSet.questions.length > 0 && (
              <Box>
                <Box
                  component="img"
                  src={currentFeedback ? currentFeedback.icon : cupcakeIcon}
                  alt="Congrats"
                  sx={{ mt: "20px", width: "100px", height: "100px" }}
                />
                <Typography variant="h5" mb="40px" fontWeight="bold">
                  {resultLabel}
                </Typography>
                <Typography variant="h6" mb="20px" fontWeight="bold">
                  {scoreText}
                </Typography>
                <Typography variant="h6" mb="20px">
                  {message}
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: "20px", sm: "20px" }}
                  sx={{ justifyContent: "center", mb: "20px" }}
                >
                  <Link to={quizPath} state={{ questionSet: questionSet }}>
                    <Button variant="contained">{retryLabel}</Button>
                  </Link>
                  <Link to={homePath}>
                    <Button variant="contained">{backLabel}</Button>
                  </Link>
                </Stack>
              </Box>
            )}
          </CenterBox>
        </CenterContainer>
      </Box>
    </Box>
  );
};

export default Result;
