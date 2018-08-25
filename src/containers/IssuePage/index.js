import React, { Component, Fragment } from "react";
import Comments from "../../components/Comments/index";
import config from "../../configs/config.json";
import * as actions from "../../actions/";
import { formatDate } from "../../utils/dateUtils";
import "./index.css";

class IssuePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { gituser, gitrepo, issueid } = this.props.params;
    if (gituser && gitrepo && issueid) {
      fetch(
        `${config.GIT_REPO_ISSUE_URL}/${gituser}/${gitrepo}/issues/${issueid}`
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          actions.fetchIssueSuccess(res, this.props);
          fetch(
            `${res.comments_url}`
          ).then(res=>res.json())
           .then(
             res => actions.getCommentsSuccess(res,this.props)
           )
        })
        .catch(error => {
          actions.fetchIssueError(error, this.props);
        });
    }
  }

  render() {
    const detail = this.props.issueDetail
      ? this.props.issueDetail.detail
      : null;
    const comments = this.props.comments
      ? this.props.comments.comments
      :null;
    return detail ? (
      <Fragment>
        <section className="issue-detail-wrapper">
          <div className="info-header">
            <span className="issue-titile">{detail.title}</span>
            <span className="issue-num">#{detail.number}</span>
          </div>
          <div className="info-desc">
            <div className="issue-status">
              <span className="icon status open" />
              {detail.state}
            </div>
            <div className="issue-details">
              <strong>{detail.user.login}</strong> opened this issue on{" "}
              {formatDate(detail.created_at)} - {detail.comments} comments
            </div>
          </div>
          <Comments params={comments}/>
          <hr />
        </section>
      </Fragment>
    ) : (
      ""
    );
  }
}

export default IssuePage;
