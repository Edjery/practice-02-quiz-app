import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  sx?: SxProps;
  children?: ReactNode;
}

const CenterBox = ({ children, sx }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CenterBox;
