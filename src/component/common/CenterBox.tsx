import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const CenterBox = ({ children }: Props) => {
  return (
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
      {children}
    </Box>
  );
};

export default CenterBox;
