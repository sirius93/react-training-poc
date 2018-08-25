import React, { Component } from "react";
import { getGithubUserRepo } from "../../actions/";
import { Link } from "react-router";

import TableRow from "../../components/TableRow/";
import labels from "../../configs/labels.json";
import "./index.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.githubUserName = React.createRef();
  }

  searchRepo = event => {
    event.preventDefault();
    const usename = this.githubUserName.current.value;
    getGithubUserRepo(usename, this.props);
  };

  render() {
    return (
      <div className="home-page-wrapper">
        <div className="user-repo-form">
          <form className="githubform" onSubmit={this.searchRepo}>
            <input
              ref={this.githubUserName}
              type="text"
              name="username"
              placeholder="Enter github user name"
            />
            <button type="submit" className="primary">
              {labels.searchBtn}
            </button>
          </form>
        </div>
        <div className="user-repositories-list">
          <ul>
            {this.props.repos.repos || this.props.repos.message ? (
              <TableRow {...this.props} />
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
