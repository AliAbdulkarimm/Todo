import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoProvider from "./context/TodoContext"; // ✅ Import here
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider> {/* ✅ Wrap at the top level */}
      <App />
    </TodoProvider>
  </React.StrictMode>
);
