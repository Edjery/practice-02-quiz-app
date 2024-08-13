import { Box } from "@mui/material";
import { pensiveMood } from "../../values/colors";
import List from "./List";
import Title from "./Title";

// #TODO change to robot font
const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        textAlign: "center",
        p: "5vh",
        bgcolor: pensiveMood.gunmetalGray,
      }}
    >
      <Title />
      <List />
    </Box>
  );
};

export default Home;
