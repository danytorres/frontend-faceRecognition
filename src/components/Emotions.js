import React, { Component } from "react";

export default class Emotions extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h1>Emotions Component</h1>
        <div className="row">
          <div className="col-md-4">
            <img
              src="http://127.0.0.1:8000/uploads/danyselfie_zWfmdFk.jpg"
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-6 mt-3">
            <ul className="list-group">
              <li className="list-group-item">Enojado</li>
              <li className="list-group-item">Contemplativo</li>
              <li className="list-group-item">Disgusto</li>
              <li className="list-group-item">Asustado</li>
              <li className="list-group-item">Felicidad</li>
              <li className="list-group-item">Neutral</li>
              <li className="list-group-item">Tristeza</li>
              <li className="list-group-item">Sorpresa</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
