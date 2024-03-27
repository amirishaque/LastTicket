import './style/slider.css';

import React, { useState } from 'react';

const MouseControlledMarquee = ({ text }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState(0);

  const handleMouseMove = (e) => {
    if (!isHovering) {
      const containerWidth = e.currentTarget.offsetWidth;
      const mousePosition = e.nativeEvent.offsetX;
      const newPosition = (mousePosition / containerWidth) * 100;
      setPosition(newPosition);
    }
  };

  return (
    <div
      className="marquee-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="marquee-content"
        style={{ transform: `translateX(${position - 50}%)` }}
      >
        {text}
      </div>
    </div>
  );
};

export default MouseControlledMarquee;

