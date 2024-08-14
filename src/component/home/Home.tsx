import { Box } from "@mui/material";
import { useState } from "react";
import { pensiveMood } from "../../values/colors";
import QuestionSet from "../../values/interface/QuestionSet";
import QuestionSetList from "../../values/QuestionSetList";
import selectRandomItems from "../helper/selectRandomItems";
import CustomButton from "./CustomButton";
import List from "./List";
import ListSkeleton from "./ListSkeleton";
import Title from "./Title";

const Home = () => {
  const [quizList, setQuizList] = useState<QuestionSet[]>(selectRandomItems(QuestionSetList, 3));
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRefresh = () => {
    setIsLoading(true);

    setTimeout(() => {
      setQuizList(selectRandomItems(QuestionSetList, 3));
      setIsLoading(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
        px: "80px",
        pt: "-20px",
        bgcolor: pensiveMood.gunmetalGray,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title />
      <Box sx={{ minHeight: "300px", width: "100%" }}>
        {isLoading ? <ListSkeleton list={quizList} /> : <List quizList={quizList} />}
      </Box>
      <CustomButton onClick={handleRefresh} isLoading={isLoading} />
    </Box>
  );
};

export default Home;
