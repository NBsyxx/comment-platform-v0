// functional component that lists all the current comments related to the page
import React from "react";
import {v4} from 'uuid'

function ExternalPageComponent() {
  return (
    <div className="container">
      <div className="card mb-3 mt-3">
        <iframe
          id={v4()}
          type="text/html"
          height="760"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ExternalPageComponent;
