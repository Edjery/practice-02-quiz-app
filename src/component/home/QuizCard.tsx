import { Box, Button, Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import { black, middleEasternEmpire, pensiveMood, sunAndSand, transparency } from "../../values/colors";
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

  const [props, api] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 20 },
  }));

  const handleMouseEnter = () => {
    api.start({ transform: "scale(1.05)" });
  };

  const handleMouseLeave = () => {
    api.start({ transform: "scale(1)" });
  };

  const pos = index ?? 0;
  const isEven = pos % 2 === 0;
  const bgColor = isEven ? middleEasternEmpire.champagne + transparency[20] : sunAndSand.champagne + transparency[20];

  return (
    <animated.div style={{ ...props }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
    </animated.div>
  );
};

export default QuizCard;
