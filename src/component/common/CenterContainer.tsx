import { Box } from "@mui/material";
import { ReactNode } from "react";
import { flowersLikeEyes, transparency, white } from "../../values/colors";
import { betterBoxStyle } from "../../values/stylingValues";

interface Props {
  children?: ReactNode;
}

const CenterContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        ...betterBoxStyle,
        bgcolor: flowersLikeEyes.charcoal + transparency[10],
        m: "auto",
        p: "20px",
        minheight: "400px",
        width: "800px",
        color: white,
      }}
    >
      {children}
    </Box>
  );
};

export default CenterContainer;
