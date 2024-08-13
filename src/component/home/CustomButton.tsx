import { Button } from "@mui/material";
import { loadingLabel, refreshLabel } from "../../values/string";
import FadeSlideFromBottom from "../animation/FadeSlideFromBottom";

interface Props {
  isLoading?: boolean;
  onClick?: () => void;
}

const CustomButton = ({ isLoading, onClick }: Props) => {
  return (
    <FadeSlideFromBottom>
      <Button variant="contained" onClick={onClick} sx={{ my: "40px" }}>
        {isLoading ? loadingLabel : refreshLabel}
      </Button>
    </FadeSlideFromBottom>
  );
};

export default CustomButton;
