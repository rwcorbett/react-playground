import React, { StrictMode } from "react";
// import ReactDOM from "react-dom"; -- use below instead
import ReactDOM from "react-dom/client";
import App from "./src/App";
import "./src/App.css";
import "./src/styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <StrictMode>
    <>
        <App />
    </>
    </StrictMode>
);

console.info("React Playground - app load");