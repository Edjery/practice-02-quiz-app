import { Box } from "@mui/material";
import { useState } from "react";
import { pensiveMood } from "../../values/colors";
import QuestionSet from "../../values/interface/QuestionSet";
import QuestionSetList from "../../values/QuestionSetList";
import getRandomItems from "../helper/getRandomItems";
import CustomButton from "./CustomButton";
import List from "./List";
import ListSkeleton from "./ListSkeleton";
import Title from "./Title";

const Home = () => {
  const [quizList, setQuizList] = useState<QuestionSet[]>(getRandomItems(QuestionSetList, 3));
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRefresh = () => {
    setIsLoading(true);

    setTimeout(() => {
      setQuizList(getRandomItems(QuestionSetList, 3));
      setIsLoading(false);
    }, 300);
  };

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
      {isLoading ? <ListSkeleton /> : <List quizList={quizList} />}
      <CustomButton onClick={handleRefresh} isLoading={isLoading} />
    </Box>
  );
};

export default Home;
