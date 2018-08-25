import React, { Component } from "react";
import { Link } from "react-router";
import { Redirect } from "react-router-dom";

import messages from "../../configs/messages.json";
import labels from "../../configs/labels.json";
import { formatDate } from "../../utils/dateUtils";
import "./index.css";

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const CommentsArray = this.props.params
    ? this.props.params
    :null;
    const CommentsHTML = CommentsArray ? CommentsArray.map((Comment)=> 
                <p className="issue-titile">{Comment.body}
                <p>by: {Comment.user.login}</p>
                <hr/>
                </p>
    ):'';
      return (
          <div>
              <section className="issue-detail-wrapper">
                <h2 className="issue-titile">
                    Comments
                </h2>
                {CommentsHTML}
              </section> 
          </div>
      )
  }
}

export default Comments;
