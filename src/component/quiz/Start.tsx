import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { backLabel, quizBeginMessage, startLabel } from "../../values/string";
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
      <CenterBox sx={{ border: "1px solid #ccc" }}>
        <Box>
          <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", mb: "20px" }}>
            {quizTitle}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", textIndent: "40px", mb: "40px", mx: "40px" }}>
            {quizDescription}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: "20px" }}>
            {quizBeginMessage}
          </Typography>
          <Box>
            <Button variant="contained" onClick={onClick} sx={{ mr: 2 }}>
              {startLabel}
            </Button>
            <Link to="/">
              <Button variant="contained">{backLabel}</Button>
            </Link>
          </Box>
        </Box>
      </CenterBox>
    </CenterContainer>
  );
};

export default Start;
