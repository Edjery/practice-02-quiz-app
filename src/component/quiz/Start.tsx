import { Button, Typography } from "@mui/material";
import CenterBox from "./CenterBox";
import CenterContainer from "./CenterContainer";

interface Props {
  onClick?: () => void;
}

const Start = ({ onClick }: Props) => {
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

export default Start;
