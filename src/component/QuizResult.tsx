import { Typography } from "@mui/material";
import CenterContainer from "./CenterContainer";
import CenterBox from "./CenterBox";

interface Props {
  score: string;
  message: string;
}

const QuizResult = ({ score, message }: Props) => {
  return (
    <CenterContainer>
      <CenterBox>
        <Typography sx={{ fontSize: "32px" }}>Result</Typography>
        <Typography>{score}</Typography>
        <Typography sx={{ fontSize: "24px", mt: "60px" }}>{message}</Typography>
      </CenterBox>
    </CenterContainer>
  );
};

export default QuizResult;
