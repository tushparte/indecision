import React from "react";
import ReactDom from "react-dom";

const Action = props => {
  return (
    <div>
      <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
