import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import AccountInfor from "./component/AccountInfor/AccountInfor";
import CreateTeam from "./component/CreateTeam/CreateTeam";
import JoinTeam from "./component/JoinTeam/JoinTeam";
import Room from "./component/Room/Room";
import Vote from "./component/Vote/Vote";
import Tracking from "./component/Tracking/Tracking";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AccountInfor" element={<AccountInfor />} />
        <Route path="/CreateTeam" element={<CreateTeam />} />
        <Route path="/JoinTeam" element={<JoinTeam />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Vote" element={<Vote />} />
        <Route path="/Tracking" element={<Tracking />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
