import React, { Component } from "react";
import axios from "axios";
import LoadComponent from "./LoadComponent";
import Emotions from "./Emotions";

class Upload extends Component {

  state = {   
    name: "",
    image: null, 
    showLoad: false,
    showEmotions: false,
    showUpload: true,
    res: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({showLoad: true, showUpload: false});
    let form_data = new FormData();
    form_data.append("image", this.state.image, this.state.image.name);
    form_data.append("name", this.state.name);
    let url = "http://localhost:8000/api/face/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({showEmotions: true, showLoad: false, res: res.data});
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { showLoad, showUpload, showEmotions, res } = this.state;
    return (
      <div className="container mt-5">
        {showLoad ? <LoadComponent /> : null}
        {showUpload ? <> 
          <form onSubmit={this.handleSubmit}>
            <p>
              <input
                type="text"
                placeholder="Name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </p>
            <p>
              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                onChange={this.handleImageChange}
                className="form-control"
                required
              />
            </p>
            <input type="submit" />
          </form>
         </> : null}
          {showEmotions ? <Emotions resData ={ res }/> : null}
      </div>
    );
  }
}

export default Upload;
