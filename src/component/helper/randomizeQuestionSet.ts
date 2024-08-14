import QuestionSet from "../../values/interface/QuestionSet";
import shuffleArray from "./shuffleArray";

/**
 * Randomizes the questions and choices within a QuestionSet.
 * @param questionSet The QuestionSet to randomize.
 * @returns A new QuestionSet with randomized questions and choices.
 */
export default (questionSet: QuestionSet): QuestionSet => {
    const randomizedSet = { ...questionSet };

    randomizedSet.questions = shuffleArray([...randomizedSet.questions]);
    randomizedSet.questions = randomizedSet.questions.map(question => ({
        ...question,
        choices: shuffleArray([...question.choices]),
    }));

    return randomizedSet;
}