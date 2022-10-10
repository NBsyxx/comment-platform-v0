// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from "react";
import React, { useState, useEffect } from "react";

const ThumbsUpComponent = () => {
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    console.log(countUp, countDown);
  }, []);

  return (
    <div>
      <Button onClick={() => setCountUp(countUp + 1)}>
        {`${countUp === 0 ? "" : countUp}`}
      </Button>

      <Button onClick={() => setCountDown(countDown + 1)}>
        {`${countDown === 0 ? "" : countDown}`}
      </Button>
    </div>
  );
};

export default ThumbsUpComponent;
