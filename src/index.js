import React from "react";
import { render } from "react-dom";
import Sort from "./Sort";
import Test from "./Test";
import "antd/dist/antd.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Sort />
    <Test />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
