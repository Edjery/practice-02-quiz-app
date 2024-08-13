import { createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Result from "./component/quiz/Result";
import { homePath, quizPath, resultPath } from "./values/paths";

export default createBrowserRouter([
  {
    path: homePath,
    element: <Home />,
  },
  {
    path: quizPath,
    element: <Quiz />,
  },
  {
    path: resultPath,
    element: <Result />,
  },
]);
