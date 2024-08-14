import { Button, CircularProgress, Typography } from "@mui/material";
import { refreshLabel } from "../../values/string";
import FadeSlideFromBottom from "../animation/FadeSlideFromBottom";

interface Props {
  isLoading?: boolean;
  onClick?: () => void;
}

const CustomButton = ({ isLoading, onClick }: Props) => {
  return (
    <FadeSlideFromBottom>
      <Button
        variant="contained"
        disabled={isLoading}
        color="secondary"
        onClick={onClick}
        sx={{ my: "40px", width: "200px", height: "50px" }}
      >
        {isLoading ? <CircularProgress color="primary" /> : <Typography sx={{ letterSpacing: "5px" }}>{refreshLabel}</Typography>}
      </Button>
    </FadeSlideFromBottom>
  );
};

export default CustomButton;
