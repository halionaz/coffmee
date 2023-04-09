import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 발급받은 추적ID를 환경 변수로 불러온다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
