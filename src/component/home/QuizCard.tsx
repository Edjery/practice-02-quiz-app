import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { middleEasternEmpire, pensiveMood, white } from "../../values/colors";
import QuestionSet from "../../values/interface/QuestionSet";
import { quizPath } from "../../values/paths";
import QuestionSetList from "../../values/QuestionSetList";
import { backgroundStyleGradient, betterBoxStyle, betterScrollStyle, hoverScale } from "../../values/stylingValues";

interface Props {
  questionSet: QuestionSet;
  index?: number;
}

const QuizCard = ({ questionSet = QuestionSetList[0], index }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(quizPath, { state: { questionSet } });
  };

  return (
    <Button sx={{ ...hoverScale, borderRadius: "10px", textTransform: "none" }} onClick={handleClick}>
      <Box
        key={index}
        sx={{
          ...backgroundStyleGradient(questionSet.background, middleEasternEmpire.darkBlue),
          ...betterBoxStyle,
          ...betterScrollStyle,
          height: "250px",
          p: "20px",
          color: white,
          border: "4px solid",
          borderRadius: "10px",
          borderColor: pensiveMood.jetBlack,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: "20px" }}>{questionSet.title}</Typography>
        <Typography sx={{ textAlign: "justify", textIndent: "25px" }}>{questionSet.description}</Typography>
      </Box>
    </Button>
  );
};

export default QuizCard;
