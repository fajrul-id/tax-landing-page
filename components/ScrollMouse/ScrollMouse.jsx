import React from "react";

const ScrollMouse = ({ onClick }) => {
  const scroll = () => {
    window.scrollBy(0, 700);
  };
  return (
    <div className="scroll-downs" onClick={scroll}>
      <div className="mousey">
        <div className="scroller"></div>
      </div>
    </div>
  );
};

export default ScrollMouse;
