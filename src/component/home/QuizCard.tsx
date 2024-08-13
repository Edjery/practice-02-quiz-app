import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { black, middleEasternEmpire, pensiveMood, sunAndSand, transparency } from "../../values/colors";
import QuestionSet from "../../values/interface/QuestionSet";
import { quizPath } from "../../values/paths";
import QuestionSetList from "../../values/questionSet/QuestionSetList";
import { betterBoxStyle, betterScrollStyle } from "../../values/stylingValues";
import HoverPopup from "../animation/HoverPopup";
import CenterBox from "../common/CenterBox";

interface Props {
  questionSet: QuestionSet;
  index?: number;
}

const QuizCard = ({ index, questionSet = QuestionSetList[0] }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(quizPath, { state: { questionSet } });
  };

  const pos = index ?? 0;
  const isEven = pos % 2 === 0;
  const bgColor = isEven ? middleEasternEmpire.champagne + transparency[20] : sunAndSand.champagne + transparency[20];

  return (
    <HoverPopup>
      <Button sx={{ borderRadius: "10px", textTransform: "none" }} onClick={handleClick}>
        <Box
          sx={{
            ...betterBoxStyle,
            ...betterScrollStyle,
            bgcolor: bgColor,
            m: "auto",
            p: "25px",
            height: "250px",
            color: black,
            border: "4px solid",
            borderRadius: "10px",
            borderColor: pensiveMood.jetBlack,
            boxSizing: "border-box",
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
