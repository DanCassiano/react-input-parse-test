import React from "react";
import { render } from "react-dom";
import InputURL from "./InputURL";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const tags = {
  "{{USER}}": "DanCassiano",
  "{{id}}": 10
};

const url = "https://{{USER}}.github.com/{{id}}";

const App = () => (
  <div style={styles}>
    <InputURL tags={tags} value={url} />
  </div>
);

render(<App />, document.getElementById("root"));
