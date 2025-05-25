import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Fonts.css";
import reportWebVitals from "./reportWebVitals";
import { ColorModeProvider } from "../src/Context/ThemeModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorModeProvider>
    <CssBaseline />
    <App />
  </ColorModeProvider>
);

reportWebVitals();
