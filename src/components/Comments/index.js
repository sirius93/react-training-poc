import React, { Component } from "react";
import "./index.css";
import {formatDate} from '../../utils/dateUtils';

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const CommentsArray = this.props.params
    ? this.props.params
    :null;
    const CommentsHTML = CommentsArray ? CommentsArray.map((Comment)=> 
              <div className="comment-container">
                <p className="comment-user"><b>{Comment.user.login}</b> commented on {formatDate(Comment.created_at)}</p>
                <p className="comment-body">{Comment.body} </p>
              </div>
    ):'';
      return (
          <div>
              <section className="comments-container">
                <h2 className="comment-titile">
                    Comments :
                </h2>
                {CommentsHTML}
              </section> 
          </div>
      )
  }
}

export default Comments;
