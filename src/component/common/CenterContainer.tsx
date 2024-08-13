import { Box } from "@mui/material";
import { ReactNode } from "react";
import { black, flowersLikeEyes, transparency, white } from "../../values/colors";

interface Props {
  children?: ReactNode;
}

const CenterContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: flowersLikeEyes.charcoal + transparency[10],
        m: "auto",
        p: "10px",
        width: "800px",
        height: "400px",
        borderRadius: "10px",
        boxShadow: `0px 10px 20px ${black + transparency[75]}, 0px 6px 6px ${black + transparency[85]}`,
        color: white,
      }}
    >
      {children}
    </Box>
  );
};

export default CenterContainer;
