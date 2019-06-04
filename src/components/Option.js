import React from "react";
import ReactDOM from "react-dom";

export default class Option extends React.Component {
  render() {
    return (
      <div className="option">
        <p className="option__text">
          {this.props.count}. {this.props.optionText}{" "}
        </p>
        <button
          onClick={e => {
            this.props.handleDeleteOption(this.props.optionText);
          }}
          className="button button--link"
        >
          Remove
        </button>
      </div>
    );
  }
}
