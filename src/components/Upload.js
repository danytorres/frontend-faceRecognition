import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {

  state = {
    name: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('name', this.state.name);
    let url = 'http://localhost:8000/api/face/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" 
            placeholder='Name' 
            id='name' 
            value={this.state.name} 
            onChange={this.handleChange} 
            className="form-control px-5"
            required/>
          </p>
          <p>
          <input type="file" 
          id="image" 
          accept="image/png, image/jpeg"  
          onChange={this.handleImageChange} 
          className="form-control px-5"
          required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Upload;