import React, { StrictMode } from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import "./src/App.css";

console.info("React Playground");

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);