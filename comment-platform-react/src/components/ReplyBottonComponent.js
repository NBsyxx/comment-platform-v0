// stateless function component
import React from "react";
import { Link } from "react-router-dom";

ReplyBottonComponent.propTypes = {};

function ReplyBottonComponent(props) {
  return (
    <div className="container">
      <header>
        <Link to="/add-comment" className="btn btn-primary sb-3">
          Reply
        </Link>
      </header>
    </div>
  );
}

export default ReplyBottonComponent;
