import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import AuthProvider from "@providers/auth.jsx";
//import IndexPage from "@pages/index.jsx";
import { Auth0Provider } from '@auth0/auth0-react';
import ThemeProvider from "@theme/index.jsx";
import { BrowserRouter } from "react-router-dom";
import Home from "@components/newHome";
import App from "./App"

import './index.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-58sfvybftbuxma56.us.auth0.com"
    clientId="kektv473AK9NnsMVX0N9yvBLhwvcegjs"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/user/index"
    }}>
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
      </Auth0Provider>
  </React.StrictMode>
)
