import { Box, Typography } from "@mui/material";
import { buffetTableBackground } from "../../values/background";
import { flowersLikeEyes, pensiveMood, transparency, white } from "../../values/colors";
import { backgroundStyleLightGradient } from "../../values/stylingValues";
import List from "./List";

// #TODO change to robot font
const Home = () => {
  return (
    <Box
      sx={{
        ...backgroundStyleLightGradient(buffetTableBackground),
        height: "100vh",
        textAlign: "center",
        bgcolor: pensiveMood.gunmetalGray,
        color: white,
      }}
    >
      <Box sx={{ p: "20px" }}>
        <Typography
          sx={{
            display: "inline-flex",
            p: "10px",
            mb: "20px",
            fontSize: "40px",
            letterSpacing: "20px",
            textShadow: `2px 2px 4px ${flowersLikeEyes.charcoal + transparency[30]}`,
          }}
        >
          IJIRI'S QUIZ BUFFET
        </Typography>
        <List />
      </Box>
    </Box>
  );
};

export default Home;
