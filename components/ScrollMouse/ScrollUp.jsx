import React from "react";

const ScrollUp = ({ onClick }) => {
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="scroll-downs" onClick={scroll}>
      <div className="mousey">
        <div className="scroller">ss</div>
      </div>
    </div>
  );
};

export default ScrollUp;
