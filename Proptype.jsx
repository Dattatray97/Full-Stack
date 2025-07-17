import React, { Component } from "react";
import PropTypes from "prop-types";

class Validation extends Component {
  render() {
    return (
      <div className="box24">
        <table border={2} cellSpacing={2} cellPadding={4}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>String</td>
              <td>{this.props.string1}</td>
              <td>{typeof this.props.string1 === "string" ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{this.props.number1}</td>
              <td>{typeof this.props.number1 === "number" ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Array</td>
              <td>{Array.isArray(this.props.array1) ? this.props.array1.join(", ") : this.props.array1}</td>
              <td>{Array.isArray(this.props.array1) ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{this.props.boolean1.toString()}</td>
              <td>{typeof this.props.boolean1 === "boolean" ? "true" : "false"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Validation.propTypes = {
  string1: PropTypes.string,
  number1: PropTypes.number,
  array1: PropTypes.array,
  boolean1: PropTypes.bool,  // 'bool' instead of 'boolean'
};

Validation.defaultProps = {
  string1: "Dattatray",
  number1: 24,
  array1: [],
  boolean1: true,
};

export default Validation;
