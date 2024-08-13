import { Grid } from "@mui/material";
import QuestionSetList from "../../values/questionSet/QuestionSetList";
import QuizCard from "./QuizCard";

const List = () => {
  const quizList = QuestionSetList;
  return (
    <Grid container spacing={1}>
      {quizList.map((quiz, index) => (
        <Grid key={index} item xs={4}>
          <QuizCard questionSet={quiz} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
