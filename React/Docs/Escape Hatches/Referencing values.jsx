import React, { useState } from "react";
import { useRef } from "react";
import { createRoot } from "react-dom/client";

function Button() {
  const countRef = useRef(0);
  return (
    <button
      onClick={() => {
        countRef.current++,
          alert("you have clicked " + countRef.current + " times");
      }}
    >
      Click Me
    </button>
  );
}

const btn = createRoot(document.getElementById("btn"));
btn.render(<Button />);

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now(), 10);
    });
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

const stopwatch = createRoot(document.getElementById("stopwatch"));
stopwatch.render(<Stopwatch />);

function Btn() {
  const [clickedTimes, setClickedTimes] = useState(0);
  return (
    <button
      onClick={() => {
        setClickedTimes(clickedTimes + 1);
      }}
    >
      You have Clicked {clickedTimes} times
    </button>
  );
}

const btn2 = createRoot(document.getElementById("btn2"));
btn2.render(<Btn />);
