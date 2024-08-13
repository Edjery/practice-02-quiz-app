import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import QuestionSetList from "../../values/questionSet/QuestionSetList";
import FadeSlideFromBottomDelay from "../animation/FadeSlideFromBottomDelay";
import QuizCard from "./QuizCard";

const List = () => {
  const [animate, setAnimate] = useState(false);
  const quizList = QuestionSetList;

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Grid container spacing={1}>
      {quizList.map((quiz, index) => {
        return (
          <Grid key={index} item xs={4}>
            <FadeSlideFromBottomDelay animate={animate} delay={index * 5}>
              <QuizCard questionSet={quiz} index={index} />
            </FadeSlideFromBottomDelay>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
