import { Box, Button, Typography } from "@mui/material";
import { flowersLikeEyes, white } from "../values/colors";
import CenterContainer from "./CenterContainer";

interface Props {
  onClick?: () => void;
}

const QuizStart = ({ onClick }: Props) => {
  return (
    <CenterContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: white,
            mb: "20px",
          }}
        >
          Click start to begin
        </Typography>
        <Button variant="contained" onClick={onClick}>
          Start
        </Button>
      </Box>
    </CenterContainer>
  );
};

export default QuizStart;
