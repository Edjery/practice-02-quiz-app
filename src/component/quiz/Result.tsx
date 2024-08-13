import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import feedback from "../../values/feedback";
import QuestionSet from "../../values/interface/QuestionSet";
import { homePath, quizPath } from "../../values/paths";
import { backLabel, resultLabel, retryLabel } from "../../values/string";
import { animationStyleFadeInScale, backgroundStyleLightGradient, centerItem } from "../../values/stylingValues";
import CenterBox from "../common/CenterBox";
import CenterContainer from "../common/CenterContainer";

const Result = () => {
  const navigate = useNavigate();
  const { state }: { state: { questionSet: QuestionSet; answerList: string[] } } = useLocation();
  const [animate, setAnimate] = useState(false);
  const answerList = state.answerList || [];
  const questionSet = state.questionSet || { questions: [] };

  useEffect(() => {
    setAnimate(true);
    if (!questionSet || !questionSet.questions.length) {
      navigate(homePath);
    }
  }, [questionSet, navigate]);

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
    <Box sx={{ ...centerItem, ...backgroundStyleLightGradient(questionSet.background) }}>
      <Box sx={{ ...animationStyleFadeInScale(true, animate) }}>
        <CenterContainer>
          <CenterBox>
            {questionSet.questions.length > 0 && (
              <Box>
                {/* add custom icon for result */}
                <Typography variant="h5" mb="40px" fontWeight="bold">
                  {resultLabel}
                </Typography>
                <Typography variant="h6" mb="20px" fontWeight="bold">
                  {scoreText}
                </Typography>
                <Typography variant="h6" mb="20px">
                  {message}
                </Typography>
                <Box>
                  <Link to={quizPath} state={{ questionSet }}>
                    <Button variant="contained" sx={{ mr: 2 }}>
                      {retryLabel}
                    </Button>
                  </Link>
                  <Link to={homePath}>
                    <Button variant="contained">{backLabel}</Button>
                  </Link>
                </Box>
              </Box>
            )}
          </CenterBox>
        </CenterContainer>
      </Box>
    </Box>
  );
};

export default Result;
