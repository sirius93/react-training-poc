import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import messages from "../../configs/messages.json";
import "./index.css";

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    redirect: false
  };

  selectRepo(route) {
    // console.log("route: ", route);
    this.setState({
      redirect: `/react-training-poc/${route}`
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    } else if (this.props.repos.message) {
      return <div className="error-message">{this.props.repos.message}</div>;
    } else if (
      this.props.repos &&
      this.props.repos.repos &&
      !this.props.repos.repos.length
    ) {
      return <div className="error-message norepo">{messages.norepo}</div>;
    }
    return this.props.repos.repos.map(repo => {
      return (
        <li
          className="border-bottom table-row"
          key={repo.id}
          onClick={() => this.selectRepo(repo.full_name)}
        >
          <div className="table-row-wrapper">
            <div className="title">
              <h4>{repo.name}</h4>
            </div>
            {/* <div className="select-repo">
              <button>{labels.selectBtn}</button>
            </div> */}
          </div>
        </li>
      );
    });
  }
}

export default TableRow;
