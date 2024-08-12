import { Button } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onclick: () => void;
  active?: boolean;
}

const OptionButton = ({ children, onclick, active = false }: Props) => {
  const variantStyle: "contained" | "outlined" = active ? "contained" : "outlined";

  return (
    <Button
      sx={{ justifyContent: "left", mb: "10px", textTransform: "none", color: "white" }}
      variant={variantStyle}
      onClick={onclick}
    >
      {children}
    </Button>
  );
};

export default OptionButton;
