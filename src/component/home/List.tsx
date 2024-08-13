import { Grid } from "@mui/material";
import QuestionSet from "../../values/interface/QuestionSet";
import QuestionSetList from "../../values/QuestionSetList";
import FadeSlideFromBottom from "../animation/FadeSlideFromBottom";
import getRandomItems from "../helper/getRandomItems";
import QuizCard from "./QuizCard";

const List = () => {
  const quizList: QuestionSet[] = getRandomItems(QuestionSetList, 3);

  return (
    <FadeSlideFromBottom>
      <Grid container spacing={1}>
        {quizList.map((quiz, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <QuizCard questionSet={quiz} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </FadeSlideFromBottom>
  );
};

export default List;
