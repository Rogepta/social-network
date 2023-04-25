import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogs = [
  { id: 1, name: "Danil" },
  { id: 2, name: "Nikita" },
  { id: 3, name: "Dima" },
  { id: 4, name: "Kolya" },
];
let messages = [
  { message: "Kolya kozel" },
  { message: "Nikita chert" },
  { message: "Danil tvar`" },
  { message: "Dima paskyda" },
];

let postsData = [
  { id: 1, message: "Hi, How are you?", likeCounter: 15 },
  { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
  { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
  { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
  { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} postsData={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
