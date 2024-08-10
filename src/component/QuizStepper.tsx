import { Box, Button, MobileStepper, Typography } from "@mui/material";
import { useState } from "react";
import { flowersLikeEyes, white, red } from "../values/colors";
import questionListA from "../values/questionSetA";
import CenterContainer from "./CenterContainer";
import indexToLetter from "./helper/indexToLetter";
import OptionButton from "./OptionButton";

const questionSet = questionListA;
const answerSet: string[] | null[] = [];

const QuizStepper = () => {
  const setSteps = questionSet.questionSet;
  const maxSteps = setSteps.length;
  const errorMessage = "All questions must be answered!";
  answerSet.length = maxSteps;

  const [activeStep, setActiveStep] = useState(0);
  const [isError, setIsError] = useState(false);

  const handleNext = () => {
    if (isError) setIsError(false);

    if (activeStep !== maxSteps - 1) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    else {
      const validataionResult = validate();
      if (validataionResult.success) {
        console.log(answerSet);
        console.log("success");
      } else {
        setActiveStep(validataionResult.currentStep);
        setIsError(true);
      }
    }
  };

  const handleBack = () => {
    if (isError) setIsError(false);

    if (activeStep !== 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChoice = (values: string) => {
    answerSet[activeStep] = values;
    handleNext();
  };

  const validate = () => {
    let success = true;
    const currentStep = answerSet.findIndex((item) => item === undefined);
    if (currentStep !== -1) success = false;

    return { success, currentStep };
  };

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
        <Typography>{setSteps[activeStep].question}</Typography>
      </Box>

      {setSteps[activeStep].choices.map((choice, index) => {
        const currentAnswer = answerSet[activeStep] === choice;
        return (
          <OptionButton key={index} onclick={() => handleChoice(choice)} active={currentAnswer}>
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
