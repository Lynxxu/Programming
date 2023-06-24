import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { createRoot } from "react-dom/client";

function VideoPlayer({ src, isPlaying, handleClick }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return (
    <video
      onClick={() => {
        handleClick();
      }}
      ref={ref}
      src={src}
      loop
      playsInline
    />
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    setIsPlaying(!isPlaying);
  }
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        src="../../../Imgs/Banff.mp4"
        isPlaying={isPlaying}
        handleClick={handleClick}
      />
    </>
  );
}

const video = createRoot(document.getElementById("video"));
video.render(<App />);
