import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing";
import AdminPage from "./super-admin";
import LoginPage from "./login";
import "ag-grid-community/dist/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // Optional theme CSS
import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./login/RequireAuth";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="login" element={<LoginPage></LoginPage>} />

          {/* we want to protect these routes */}
          {/* <Route element={<RequireAuth></RequireAuth>}> */}
          <Route path="admin/*" element={<AdminPage></AdminPage>} />
          {/* </Route> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
