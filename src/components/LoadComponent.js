import React, { Component } from "react";

export default class LoadComponent extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      </div>
    );
  }
}
