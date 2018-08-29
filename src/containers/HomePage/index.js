import React, { Component } from "react";
import { getGithubUserRepo } from "../../actions/";
import Paginate from "react-paginate";
import { Link } from "react-router";
import config from "../../configs/config.json";
import TableRow from "../../components/TableRow/";
import labels from "../../configs/labels.json";
import "./index.css";
import * as actions from "../../actions/";


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

  handlePageChange = ({ selected }) => {
    let currentPage = selected+1;
    const newItems = this.props.repos.repos.slice(
      selected * config.ISSUES_ON_PAGE,
      currentPage * config.ISSUES_ON_PAGE
    );
    actions.changeRepoPage(newItems, this.props);
    console.log("new Items: ", newItems);
  };

  render() {
    const pageCount =
      this.props.repos && this.props.repos.repos
        ? Math.ceil(this.props.repos.repos.length / config.ISSUES_ON_PAGE)
        : 1;
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
              <TableRow params={this.props.params} {...this.props} />
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="issues__pagination">
            {this.props.repos &&
            this.props.repos.repos &&
            this.props.repos.repos.length ? (
              <Paginate
                forcePage={0}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageChange}
                nextLabel="&rarr;"
                previousLabel="&larr;"
              />
            ) : (
              ""
            )}
          </div>
      </div>
    );
  }
}

export default HomePage;
