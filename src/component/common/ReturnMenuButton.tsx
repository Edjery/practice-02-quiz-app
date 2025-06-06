import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { homePath } from "../../values/paths";
import { menuLabel } from "../../values/string";

const ReturnMenuButton = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
        padding: 2,
      }}
    >
      <Link to={homePath} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">
          {menuLabel}
        </Button>
      </Link>
    </Box>
  );
};

export default ReturnMenuButton;
