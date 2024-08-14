import { Button, CircularProgress } from "@mui/material";
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
        sx={{ my: "40px", width: "150px", height: "50px" }}
      >
        {isLoading ? <CircularProgress color="primary" /> : refreshLabel}
      </Button>
    </FadeSlideFromBottom>
  );
};

export default CustomButton;
