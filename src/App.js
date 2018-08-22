import React, { Component } from 'react';
import PropTypes from "prop-types";
import logo from './logo.svg';
import './App.css';
import {ajaxCall} from './Utils/service';
class App extends Component { 
  constructor(props){
    super(props)
    this.state = {
      res : []
    }
  }
baseUrl = "https://api.github.com";
getUserData = username => {
  ajaxCall(`${this.baseUrl}/users/${username}`).then(
    data => {
      this.setState(this.state.res = data)
    }
  )
}
handleSubmit = event => {
  event.preventDefault();
  console.log(event.currentTarget.value);
  this.getUserData(event.currentTarget.value);
}

  render() {
    return (
      <div className="App">
          <form>
            <input onChange={this.handleSubmit} className="username" type="text" required></input>
          </form> 
          <div className="result">
            <a target="_blank" href={this.state.res.html_url}>{this.state.res.name}</a>
          </div>
      </div>
    );
  }
}

export default App;
