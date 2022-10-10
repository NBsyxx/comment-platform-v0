import React from "react";
import PropTypes from "prop-types";

FooterComponent.propTypes = {};

function FooterComponent(props) {
  return (
    <div>
      <footer className="navbar bottom justify-content-center">
        <span className="text-muted">
          All Rights Reserved 2022 @Yunxiao Song
        </span>
      </footer>
    </div>
  );
}

export default FooterComponent;
