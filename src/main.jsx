import React from "react";
import AuthProvider from "../src/context/AuthProvider.jsx"
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
<AuthProvider>
  <App />
  </AuthProvider>   
   
  </BrowserRouter>
);
