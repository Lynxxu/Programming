import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "50vh",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -300,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

const movingDot = createRoot(document.getElementById("movingDot"));
movingDot.render(<MovingDot />);
