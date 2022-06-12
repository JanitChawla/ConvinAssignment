import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import ButtonAppBar from "./Navbar/Navbar";

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ButtonAppBar />
    <App className="app" />
  </Provider>
);
