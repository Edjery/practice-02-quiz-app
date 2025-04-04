import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { middleEasternEmpire, pensiveMood } from "../../values/colors";
import QuestionSet from "../../values/interface/QuestionSet";
import { quizPath } from "../../values/paths";
import QuestionSetList from "../../values/QuestionSetList";
import { backgroundStyleGradient, betterScrollStyle, hoverScale } from "../../values/stylingValues";
import CenterBox from "../common/CenterBox";
import CenterContainer from "../common/CenterContainer";

interface Props {
  questionSet: QuestionSet;
  index?: number;
}

const QuizCard = ({ questionSet = QuestionSetList[0], index }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(quizPath, { state: { questionSet: questionSet } });
  };

  return (
    <Button sx={{ ...hoverScale, borderRadius: "10px", textTransform: "none" }} onClick={handleClick}>
      <CenterContainer
        key={index}
        sx={{
          ...backgroundStyleGradient(questionSet.background, middleEasternEmpire.darkBlue),
          ...betterScrollStyle,
          display: { xs: "block", md: "flex" },
          p: "20px",
          height: "250px",
          minHeight: "250px",
          width: "100%",
          border: "4px solid",
          borderRadius: "10px",
          borderColor: pensiveMood.jetBlack,
        }}
      >
        <CenterBox>
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: "20px" }}>{questionSet.title}</Typography>
            <Typography sx={{ textAlign: "center" }}>{questionSet.description}</Typography>
          </Box>
        </CenterBox>
      </CenterContainer>
    </Button>
  );
};

export default QuizCard;
