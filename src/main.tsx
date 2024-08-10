import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./component/MainPage.tsx";
import "./index.css";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  </StrictMode>
);
