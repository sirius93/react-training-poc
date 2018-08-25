import React, { Component } from "react";
import "./index.css";
import {formatDate} from '../../utils/dateUtils';
import * as actions from "../../actions/";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.handleCommentBody = this.handleCommentBody.bind(this);
    this.handleCommentUser= this.handleCommentUser.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.state = {
      body: '',
      user : {
        login : ''
      }
  };
  }
  handleCommentBody(event){
    this.setState(
      {
        body : event.target.value,
      }
    )
  }
  handleCommentUser(event){
    this.setState(
      {
        user:{
          login : event.target.value
        }
      }
    )
  }
  handleCommentSubmit(event){
    event.preventDefault();
    this.props.params.comments.comments.push(this.state);
    this.setState(
      {
        body: '',
        user : {
          login : ''
        }
      }
    )
    let data = this.props.params.comments.comments;
    actions.getCommentsSuccess(data,this.props.params)
  }
  render() {
    const date = new Date();
    const CommentsArray = this.props.params
    ? this.props.params.comments.comments
    :null;
    const CommentsHTML = CommentsArray ? CommentsArray.map((Comment)=> 
              <div className="comment-container">
                <p className="comment-user"><b>{Comment.user.login}</b> commented on {Comment.created_at?formatDate(Comment.created_at):formatDate(date)}</p>
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
              <form className="githubform" onSubmit={this.handleCommentSubmit}>
                <input className="Comment-body" value={this.state.body} onChange={this.handleCommentBody} type="text" placeholder="Enter your comment here" required></input>
                <input className="Comment-user" value={this.state.user.login} onChange={this.handleCommentUser} type="text" placeholder="Enter your userId" required></input>
                <input className="submit-button" type="submit" value="Post"></input>
              </form>  
              </section> 
          </div>
      )
  }
}

export default Comments;
