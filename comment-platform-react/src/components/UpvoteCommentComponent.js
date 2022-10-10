import React, { Component, useState } from "react";
import CommentServices from "../services/CommentServices";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

class UpvoteCommentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentContent: "",
      userid: "",
      ip: "",
      replyto: "",
    };

    this.changeCommentContentHandler =
      this.changeCommentContentHandler.bind(this);
    this.changeUseridHandler = this.changeUseridHandler.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  saveComment = async (e) => {
    const res = await axios.get("https://geolocation-db.com/json/");
    this.state.ip = res.data.IPv4;
    e.preventDefault();
    let comment = {
      userid: this.state.userid,
      commentContent: this.state.commentContent,
      ip: this.state.ip,
    };
    console.log("comment =>" + JSON.stringify(comment));

    CommentServices.addComments(comment).then((res) => {
      window.location.reload(false);
    });
  };
  changeCommentContentHandler = (event) => {
    this.setState({ commentContent: event.target.value });
  };
  changeUseridHandler = (event) => {
    this.setState({ userid: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="card mb-3">
            <div className="card-body mb-3">
              <h5 className="card-title mb-3">Add your comment</h5>
              <form>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        @
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Userid"
                      name="userid"
                      value={this.state.userid}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={this.changeUseridHandler}
                    ></input>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    type="text"
                    placeholder="Enter your comments"
                    name="commentContent"
                    className="form-control"
                    value={this.state.commentContent}
                    onChange={this.changeCommentContentHandler}
                  ></textarea>
                </div>
                <div className="mt-3 ">
                  <div className="btn btn-primary " onClick={this.saveComment}>
                    comment
                  </div>
                  <Link to="/" className="btn btn-danger">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpvoteCommentComponent;
