import { Box, Button, Typography } from "@mui/material";
import { flowersLikeEyes, white } from "../values/colors";
import CenterContainer from "./CenterContainer";
import CenterBox from "./CenterBox";

interface Props {
  onClick?: () => void;
}

const QuizStart = ({ onClick }: Props) => {
  return (
    <CenterContainer>
      <CenterBox>
        <Typography
          sx={{
            fontWeight: "bold",
            mb: "20px",
          }}
        >
          Click start to begin
        </Typography>
        <Button variant="contained" onClick={onClick}>
          Start
        </Button>
      </CenterBox>
    </CenterContainer>
  );
};

export default QuizStart;
