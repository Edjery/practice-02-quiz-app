import Question from "./Question";

export default interface QuestionSet {
    title: string;
    description: string;
    questions: Question[];
    background: string;
}