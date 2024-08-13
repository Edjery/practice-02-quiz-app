import { Grid } from "@mui/material";
import QuestionSet from "../../values/interface/QuestionSet";
import FadeSlideFromBottom from "../animation/FadeSlideFromBottom";
import QuizCard from "./QuizCard";

interface Props {
  quizList: QuestionSet[];
}

const List = ({ quizList }: Props) => {
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
