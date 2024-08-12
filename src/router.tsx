import { createBrowserRouter } from "react-router-dom";
import MainPage from "./component/MainPage";
import QuizResult from "./component/QuizResult";

export default createBrowserRouter([
  {
    path: "",
    element: <MainPage />,
  },
  {
    path: "result",
    element: <QuizResult />,
  },
]);
