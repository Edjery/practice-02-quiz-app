import { Box, Button, MobileStepper, Typography } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { flowersLikeEyes, transparency, white } from "../../values/colors";
import QuestionSet from "../../values/interface/QuestionSet";
import { resultPath } from "../../values/paths";
import CenterBox from "../common/CenterBox";
import CenterContainer from "../common/CenterContainer";
import indexToLetter from "../helper/indexToLetter";
import ErrorPrompt from "./ErrorPrompt";
import OptionButton from "./OptionButton";

interface Props {
  questionSet: QuestionSet;
}

const backgroundColor = flowersLikeEyes.charcoal + transparency[90];

const Questions = ({ questionSet }: Props) => {
  const navigate = useNavigate();
  const initialAnswerList: string[] = Array(questionSet.questions.length).fill(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isError, setIsError] = useState(false);
  const [answerList, setAnswerList] = useState(initialAnswerList);

  const questions = questionSet.questions;
  const maxSteps = questions.length;

  const handleNext = useCallback(() => {
    if (isError) setIsError(false);

    if (activeStep !== maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      const validationResult = validate();
      if (validationResult.success) {
        navigate(resultPath, { state: { questionSet: questionSet, answerList: answerList } });
      } else {
        setActiveStep(validationResult.currentStep);
        setIsError(true);
      }
    }
  }, [activeStep, isError, maxSteps, answerList]);

  const handleBack = useCallback(() => {
    if (isError) setIsError(false);
    if (activeStep !== 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, [activeStep, isError]);

  const handleChoice = useCallback(
    (value: string) => {
      setAnswerList((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[activeStep] = value;
        return updatedAnswers;
      });
    },
    [activeStep]
  );

  const validate = useCallback(() => {
    const currentStep = answerList.findIndex((item) => item === null);
    return {
      success: currentStep === -1,
      currentStep,
    };
  }, [answerList]);

  const currentQuestion = useMemo(() => questions[activeStep], [activeStep, questions]);

  return (
    <CenterContainer>
      <CenterBox sx={{ flexDirection: "column" }}>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", textAlign: "center", width: "100%" }}>
          <Box component="h3" sx={{ textAlign: "center" }}>
            {questionSet.title}
          </Box>
          <MobileStepper
            sx={{ bgcolor: backgroundColor, justifyContent: "center", width: "100%" }}
            variant="progress"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={null}
            backButton={null}
          />
          <ErrorPrompt isError={isError} />
        </Box>

        <Box sx={{ mb: "30px" }}>
          <Typography>{currentQuestion.text}</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {currentQuestion.choices.map((choice, index) => {
            const isActive = answerList[activeStep] === choice;
            return (
              <OptionButton key={index} onclick={() => handleChoice(choice)} active={isActive}>
                {indexToLetter(index)}. {choice}
              </OptionButton>
            );
          })}

          <MobileStepper
            sx={{ bgcolor: backgroundColor, color: white, borderRadius: "20px" }}
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
        </Box>
      </CenterBox>
    </CenterContainer>
  );
};

export default Questions;
