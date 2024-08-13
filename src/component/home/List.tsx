import { Grid } from "@mui/material";
import { animated, config, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import QuestionSetList from "../../values/questionSet/QuestionSetList";
import QuizCard from "./QuizCard";

const List = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const quizList = QuestionSetList;

  return (
    <Grid container spacing={1}>
      {quizList.map((quiz, index) => {
        const props = useSpring({
          to: {
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(100px)",
          },
          from: { opacity: 0, transform: "translateY(100px)" },
          config: config.slow,
          delay: index * 50,
        });

        return (
          <Grid key={index} item xs={4}>
            <animated.div style={props}>
              <QuizCard questionSet={quiz} index={index} />
            </animated.div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
