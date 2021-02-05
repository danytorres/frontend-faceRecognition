import React, { Component } from "react";

const Emotions = (props) => {

    console.log(props.resData.emotions.anger);

    return (
      <div className="container mt-5">
        <h1>Emotions Component</h1>
        <div className="row">
          <div className="col-md-4">
            <img
              src={"http://127.0.0.1:8000"+props.resData.image}
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-6 mt-3">
            <ul className="list-group">
              <li className="list-group-item">{"Enojado => "+props.resData.emotions.anger}</li>
              <li className="list-group-item">{"Contemplativo => "+props.resData.emotions.contempt}</li>
              <li className="list-group-item">{"Disgusto => "+props.resData.emotions.disgust}</li>
              <li className="list-group-item">{"Asustado => "+props.resData.emotions.fear}</li>
              <li className="list-group-item">{"Felicidad => "+props.resData.emotions.happiness}</li>
              <li className="list-group-item">{"Neutral => "+props.resData.emotions.neutral}</li>
              <li className="list-group-item">{"Tristeza => "+props.resData.emotions.sadness}</li>
              <li className="list-group-item">{"Sorpresa => "+props.resData.emotions.surprise}</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Emotions;
