import { Box } from "@mui/material";
import { pensiveMood } from "../../values/colors";
import List from "./List";
import Title from "./Title";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
        px: "80px",
        pt: "-100px",
        bgcolor: pensiveMood.gunmetalGray,

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title />
      <List />
    </Box>
  );
};

export default Home;
