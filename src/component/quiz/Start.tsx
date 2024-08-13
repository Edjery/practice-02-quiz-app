import { Button, Typography } from "@mui/material";
import { quizBeginMessage, startLabel } from "../../values/string";
import CenterBox from "../common/CenterBox";
import CenterContainer from "../common/CenterContainer";

interface Props {
  quizTitle: string;
  quizDescription: string;
  onClick?: () => void;
}

const Start = ({ quizTitle, quizDescription, onClick }: Props) => {
  return (
    <CenterContainer>
      <CenterBox>
        <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", mb: "20px" }}>
          {quizTitle}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify", textIndent: "40px", mb: "40px", mx: "40px" }}>
          {quizDescription}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: "20px" }}>
          {quizBeginMessage}
        </Typography>
        <Button variant="contained" onClick={onClick}>
          {startLabel}
        </Button>
      </CenterBox>
    </CenterContainer>
  );
};

export default Start;
