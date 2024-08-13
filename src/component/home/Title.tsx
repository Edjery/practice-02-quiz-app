import { Typography } from "@mui/material";
import { flowersLikeEyes, sunAndSand, transparency } from "../../values/colors";
import { homePageTitle } from "../../values/string";
import FadeSlideFromTop from "../animation/FadeSlideFromTop";

const Title = () => {
  return (
    <FadeSlideFromTop>
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
        {homePageTitle}
      </Typography>
    </FadeSlideFromTop>
  );
};

export default Title;
