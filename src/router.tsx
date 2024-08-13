import { createBrowserRouter } from "react-router-dom";
import Main from "./component/quiz/Main";
import Result from "./component/quiz/Result";

export default createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "result",
    element: <Result />,
  },
]);
