import ReactDOM from "react-dom/client";
import ToastContextProvider from "./components/Toast/Toast";
import App from "./App";
import React from "react"

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  );
} else {
  console.error("Root element not found.");
}
