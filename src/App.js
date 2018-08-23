import React, { Component } from 'react';
import './App.css';
import { createStore } from "redux";
import {ajaxCall} from './Utils/service';
import store from './store';

const initialState = {
  userData : [],
  repos : [],
  formData : ''
};
// const store = createStore(reducer, initialState);

class App extends Component { 
  constructor(props){
    super(props)
    this.state = {
      userData : [],
      repos : [],
      formData : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }
baseUrl = "https://api.github.com";
getUserData = username => {
  ajaxCall(`${this.baseUrl}/users/${username}`).then(
    data => {
      this.setState(this.state.userData = data)
      this.getRepos(data.repos_url)
    }
  )
}
getRepos= url => {
  ajaxCall(`${url}`).then(
    data => {
      this.setState(this.state.repos = data)
    }
  )
  console.log(this.state.repos)
}
handleSubmit = event => {
  event.preventDefault();
  this.getUserData(this.state.formData);
}
handleChange = event => {
  event.preventDefault();
  this.setState({
    formData : event.target.value
  })
}
  render() {
    const reposHtml = this.state.repos.map((repo)=> 
      <li><a target="_blank" href={repo.html_url}> {repo.name}</a> </li>
    );
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.formData} className="username" type="text" required></input>
            <input className="submit" value="find user" type="submit"></input>
          </form> 
          <div className="result">
            <h3>User</h3>
            <a target="_blank" href={this.state.userData.html_url}>{this.state.userData.name}</a>
            <h3>Repos</h3>
            {reposHtml}
          </div>
      </div>
    );
  }
}

export default App;
