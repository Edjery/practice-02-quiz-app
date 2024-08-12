import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { flowersLikeEyes } from "../values/colors";
import feedback from "../values/feedback";
import QuestionSet from "../values/interface/QuestionSet";
import { centerItem } from "../values/stylingValues";
import CenterBox from "./CenterBox";
import CenterContainer from "./CenterContainer";

const Result = () => {
  let score = 0;
  const location = useLocation();
  const answerList: string[] = location.state?.answerList;
  const questionSet: QuestionSet = location.state?.questionSet;
  const totalQuestions = questionSet ? questionSet.questions.length : 0;
  const isResult = answerList && questionSet;

  if (isResult) {
    questionSet.questions.forEach((question, index) => {
      if (question.correctAnswer.includes(answerList[index])) score += 1;
    });
  }

  const percentage = (score / totalQuestions) * 100;
  const currentFeedback = feedback
    .sort()
    .reverse()
    .find((item) => item.minPercentage <= percentage);

  const message = currentFeedback ? `${percentage !== 100 ? `${percentage}%` : ""} ${currentFeedback.message}` : `${percentage}%`;
  const scoreText = `Score: ${score}/${totalQuestions} which is `;
  return (
    <Box sx={{ ...centerItem, bgcolor: flowersLikeEyes.purpleHaze }}>
      <CenterContainer>
        <CenterBox>
          {isResult ? (
            <Box>
              <Typography sx={{ fontSize: "32px" }}>Result</Typography>
              <Typography>{scoreText}</Typography>
              <Typography sx={{ fontSize: "24px", mt: "60px" }}>{message}</Typography>
            </Box>
          ) : (
            <Box>
              <Typography sx={{ fontSize: "32px", mb: "60px" }}>No result yet</Typography>
              <Link to="/">
                <Button variant="contained">Go back</Button>
              </Link>
            </Box>
          )}
        </CenterBox>
      </CenterContainer>
    </Box>
  );
};

export default Result;
