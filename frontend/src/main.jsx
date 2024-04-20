import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "@pages/index.jsx";
import AuthProvider from "@providers/auth.jsx";
import ThemeProvider from "@theme/index.jsx";
import { BrowserRouter } from "react-router-dom";
import Home from "@pages/newHome.jsx";
import './main.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);