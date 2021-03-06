import React from "react";
import Timer from "./components/Timer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
