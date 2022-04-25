import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AxiosPost from "./axios/AxiosPost";
import AxiosGet from "./axios/AxiosGet";
import AxiosPut from "./axios/AxiosPut";
import AxiosDelete from "./axios/AxiosDelete";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <AxiosPost /> */}
    {/* <AxiosGet /> */}
    {/* <AxiosPut /> */}
    <AxiosDelete />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
