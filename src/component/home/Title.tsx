import { Typography } from "@mui/material";
import { flowersLikeEyes, sunAndSand, transparency } from "../../values/colors";

const Title = () => {
  return (
    <Typography
      sx={{
        display: "inline-flex",
        p: "10px",
        mb: "20px",
        fontSize: "40px",
        letterSpacing: "20px",
        textShadow: `2px 2px 4px ${flowersLikeEyes.charcoal + transparency[30]}`,
        color: sunAndSand.champagne,
      }}
    >
      IJIRI'S QUIZ BUFFET
    </Typography>
  );
};

export default Title;
