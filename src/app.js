//install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

//Adding default props
IndecisionApp.defaultProps = {
  options: []
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
