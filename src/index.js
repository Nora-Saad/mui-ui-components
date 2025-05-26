import { CssBaseline, GlobalStyles } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Fonts.css";
import reportWebVitals from "./reportWebVitals";
import { ColorModeProvider } from "../src/Context/ThemeModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorModeProvider>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          minWidth: "300px",
          overflowX: "hidden",
        },
      }}
    />
    <App />
  </ColorModeProvider>
);

reportWebVitals();
