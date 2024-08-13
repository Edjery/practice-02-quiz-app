import Question from "./Question";

export default interface QuestionSet {
    title: string;
    description: string;
    background: string;
    questions: Question[];
}