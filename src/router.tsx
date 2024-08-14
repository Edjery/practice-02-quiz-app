import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./component/common/ErrorPage";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Result from "./component/quiz/Result";
import errorList from "./values/errorList";
import { homePath, quizPath, resultPath } from "./values/paths";

export default createBrowserRouter([
  {
    path: homePath,
    element: <Home />,
  },
  {
    path: quizPath,
    element: <Quiz />,
    errorElement: <ErrorPage error={errorList.notForYou} />,
  },
  {
    path: resultPath,
    element: <Result />,
    errorElement: <ErrorPage error={errorList.error} />,
  },
  {
    path: "*",
    element: <ErrorPage error={errorList.notFound} />,
  },
]);
