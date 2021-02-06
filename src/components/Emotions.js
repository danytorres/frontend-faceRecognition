import React from "react";

const Emotions = (props) => {
  // console.log(props.resData.emotions.anger);

  return (
    <div className="container mt-5">
      <h2 className="display-3 text-center">
        {"Emociones de " + props.resData.name}
      </h2>
      <div className="row">
        <div className="col-md-4">
          <img
            src={"http://localhost:8000" + props.resData.image}
            className="img-fluid"
          ></img>
        </div>
        <div className="col-md-6 mt-3">
          <ul className="list-group">
            {props.resData.emotions.anger ||
            props.resData.emotions.anger == 0 ? (
              <li className="list-group-item">
                {"Enojo => " + props.resData.emotions.anger}
              </li>
            ) : null}
            {props.resData.emotions.contempt ||
            props.resData.emotions.contempt == 0 ? (
              <li className="list-group-item">
                {"Desprecio => " + props.resData.emotions.contempt}
              </li>
            ) : null}
            {props.resData.emotions.disgust ||
            props.resData.emotions.disgust == 0 ? (
              <li className="list-group-item">
                {"Asco => " + props.resData.emotions.disgust}
              </li>
            ) : null}
            {props.resData.emotions.fear || props.resData.emotions.fear == 0 ? (
              <li className="list-group-item">
                {"Miedo => " + props.resData.emotions.fear}
              </li>
            ) : null}
            {props.resData.emotions.happiness ||
            props.resData.emotions.happiness == 0 ? (
              <li className="list-group-item">
                {"Felicidad => " + props.resData.emotions.happiness}
              </li>
            ) : null}
            {props.resData.emotions.neutral ||
            props.resData.emotions.neutral == 0 ? (
              <li className="list-group-item">
                {"Neutro => " + props.resData.emotions.neutral}
              </li>
            ) : null}
            {props.resData.emotions.sadness ||
            props.resData.emotions.sadness == 0 ? (
              <li className="list-group-item">
                {"Tristeza => " + props.resData.emotions.sadness}
              </li>
            ) : null}
            {props.resData.emotions.surprise ||
            props.resData.emotions.surprise == 0 ? (
              <li className="list-group-item">
                {"Sorpresa => " + props.resData.emotions.surprise}
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Emotions;
