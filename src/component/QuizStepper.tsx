import { Box, Button, MobileStepper, Typography } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { flowersLikeEyes, red, white } from "../values/colors";
import questionSetA from "../values/questionSetA";
import CenterContainer from "./CenterContainer";
import indexToLetter from "./helper/indexToLetter";
import OptionButton from "./OptionButton";
import QuestionSet from "../values/interface/QuestionSet";

const questionSet: QuestionSet = questionSetA;
const initialAnswerSet: string[] = Array(questionSet.questions.length).fill(null);
const errorMessage: string = "All questions must be answered!";

const QuizStepper = () => {
  const setSteps = questionSet.questions;
  const maxSteps = setSteps.length;

  const [activeStep, setActiveStep] = useState(0);
  const [isError, setIsError] = useState(false);
  const [answerSet, setAnswerSet] = useState(initialAnswerSet);

  const handleNext = useCallback(() => {
    if (isError) setIsError(false);

    if (activeStep !== maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      const validationResult = validate();
      if (validationResult.success) {
        console.log(answerSet);
        console.log("success");
      } else {
        setActiveStep(validationResult.currentStep);
        setIsError(true);
      }
    }
  }, [activeStep, isError, maxSteps, answerSet]);

  const handleBack = useCallback(() => {
    if (isError) setIsError(false);
    if (activeStep !== 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, [activeStep, isError]);

  const handleChoice = useCallback(
    (value: string) => {
      setAnswerSet((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[activeStep] = value;
        return updatedAnswers;
      });
    },
    [activeStep]
  );

  const validate = useCallback(() => {
    const currentStep = answerSet.findIndex((item) => item === null);
    return {
      success: currentStep === -1,
      currentStep,
    };
  }, [answerSet]);

  const currentQuestion = useMemo(() => setSteps[activeStep], [activeStep, setSteps]);

  return (
    <CenterContainer>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Box component="h3" sx={{ textAlign: "center" }}>
          {questionSet.title}
        </Box>
        <MobileStepper
          sx={{ bgcolor: flowersLikeEyes.purple, justifyContent: "center", width: "100%" }}
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={null}
          backButton={null}
        />
        {isError && (
          <Box
            sx={{
              mb: "30px",
              p: "10px",
              bgcolor: red,
              color: flowersLikeEyes.purpleHaze,
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            {errorMessage}
          </Box>
        )}
      </Box>

      <Box sx={{ mb: "30px" }}>
        <Typography>{currentQuestion.text}</Typography>
      </Box>

      {currentQuestion.choices.map((choice, index) => {
        const isActive = answerSet[activeStep] === choice;
        return (
          <OptionButton key={index} onclick={() => handleChoice(choice)} active={isActive}>
            {indexToLetter(index)}. {choice}
          </OptionButton>
        );
      })}

      <MobileStepper
        sx={{ bgcolor: flowersLikeEyes.purple, color: white }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps} sx={{ color: white }}>
            {activeStep === maxSteps - 1 ? "Finish" : "Next"}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ color: white }}>
            Back
          </Button>
        }
      />
    </CenterContainer>
  );
};

export default QuizStepper;
