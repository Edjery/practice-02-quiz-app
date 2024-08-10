import { Box } from "@mui/material";
import { ReactNode } from "react";
import { flowersLikeEyes } from "../values/colors";

interface Props {
  children: ReactNode;
}

const CenterContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: flowersLikeEyes.purple,
        maxWidth: "800px",
        m: "auto",
        p: "10px",
        width: "1200px",
        height: "400px",
        borderRadius: "10px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
      }}
    >
      {children}
    </Box>
  );
};

export default CenterContainer;
