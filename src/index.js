import React from "react";
import { render } from "react-dom";
import InputURL from "./InputURL";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <InputURL />
  </div>
);

render(<App />, document.getElementById("root"));
