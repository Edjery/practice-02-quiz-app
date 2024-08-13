import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { middleEasternEmpire, pensiveMood, white } from "../../values/colors";
import QuestionSet from "../../values/interface/QuestionSet";
import { quizPath } from "../../values/paths";
import QuestionSetList from "../../values/questionSet/QuestionSetList";
import { backgroundStyleGradient, betterBoxStyle, betterScrollStyle } from "../../values/stylingValues";
import HoverPopup from "../animation/HoverPopup";
import CenterBox from "../common/CenterBox";

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
    <HoverPopup key={index}>
      <Button sx={{ borderRadius: "10px", textTransform: "none" }} onClick={handleClick}>
        <Box
          sx={{
            ...backgroundStyleGradient(questionSet.background, middleEasternEmpire.darkBlue),
            ...betterBoxStyle,
            ...betterScrollStyle,
            // bgcolor: bgColor,
            m: "auto",
            p: "25px",
            height: "250px",
            color: white,
            border: "4px solid",
            borderRadius: "10px",
            borderColor: pensiveMood.jetBlack,
          }}
        >
          <CenterBox>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: "20px" }}>{questionSet.title}</Typography>
            <Typography sx={{ textAlign: "justify", textIndent: "25px" }}>{questionSet.description}</Typography>
          </CenterBox>
        </Box>
      </Button>
    </HoverPopup>
  );
};

export default QuizCard;
