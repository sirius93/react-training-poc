import React, { Component, Fragment } from "react";
import Paginate from "react-paginate";
import auth from "../../configs/auth.json";
import config from "../../configs/config.json";
import IssueRow from "../../components/IssueRow/";
import IssueHeader from "../../components/IssueHeader/";
import UserInfo from "../../components/UserInfo/";
import * as actions from "../../actions/";
import "./index.css";

class ListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { gituser, gitrepo } = this.props.params;
    if (gituser && gitrepo) {
      fetch(`${config.GIT_REPO_ISSUE_URL}/${gituser}/${gitrepo}/issues?per_page=100&type=owner?client_id=${auth.clientId}&client_secret=${auth.secretKey}`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          actions.getIssuesSuccess(res, this.props);
        })
        .catch(error => {
          actions.getIssuesError(error, this.props);
        });
    }
  }
  handlePageChange = ({ selected }) => {
    let currentPage = selected+1;
    const newItems = this.props.issues.issues.slice(
      selected * config.ISSUES_ON_PAGE,
      currentPage * config.ISSUES_ON_PAGE
    );
    actions.changePage(newItems, this.props);
    console.log("new Items: ", newItems);
  };
  render() {
    const pageCount =
      this.props.issues && this.props.issues.issues
        ? Math.ceil(this.props.issues.issues.length / config.ISSUES_ON_PAGE)
        : 1;
    return (
      <Fragment>
        <UserInfo {...this.props} />
        <section className="list-page-wrapper">
          <div className="user-issues-list">
            {this.props.issues ? <IssueHeader {...this.props} /> : ""}
            <ul>
              {this.props.issues ? (
                <IssueRow params={this.props.params} {...this.props} />
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="issues__pagination">
            {this.props.issues &&
            this.props.issues.items &&
            this.props.issues.items.length ? (
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
        </section>
      </Fragment>
    );
  }
}

export default ListPage;
