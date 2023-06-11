import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./contexts/AuthContext.js";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-a2uqdd4g8uw67l88.eu.auth0.com"
      clientId="JCWySnjXa0j27h4uGXJnAaPpvoIkgBdh"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
