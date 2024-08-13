import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { flowersLikeEyes, pensiveMood, transparency, white } from "../../values/colors";
import QuestionSet from "../../values/interface/QuestionSet";
import { quizPath } from "../../values/paths";
import QuestionSetList from "../../values/questionSet/QuestionSetList";
import { betterBoxStyle, betterScrollStyle } from "../../values/stylingValues";
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
  const bgColor = isEven ? flowersLikeEyes.charcoal + transparency[10] : pensiveMood.gunmetalGray + transparency[5];

  return (
    <Button sx={{ borderRadius: "10px", textTransform: "none" }} onClick={handleClick}>
      <Box
        sx={{
          ...betterBoxStyle,
          ...betterScrollStyle,
          bgcolor: bgColor,
          m: "auto",
          p: "25px",
          height: "200px",
          color: white,
        }}
      >
        <CenterBox>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: "20px" }}>{questionSet.title}</Typography>
          <Typography sx={{ textAlign: "justify", textIndent: "25px" }}>{questionSet.description}</Typography>
        </CenterBox>
      </Box>
    </Button>
  );
};

export default QuizCard;
