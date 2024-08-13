import { Box, Typography } from "@mui/material";
import { pensiveMood, white } from "../../values/colors";
import List from "./List";

// #TODO change to robot font
const Home = () => {
  return (
    <Box sx={{ height: "100vh", textAlign: "center", bgcolor: pensiveMood.gunmetalGray, color: white }}>
      <Box sx={{ p: "20px" }}>
        <Typography sx={{ mb: "20px", fontSize: "40px", letterSpacing: "10px" }}>Ijiri's Quiz Buffet</Typography>
        <List />
      </Box>
    </Box>
  );
};

export default Home;
