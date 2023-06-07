import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Counters() {
  const [showShiroko, setShowShiroko] = useState(true);
  return (
    <div className="counters">
      <Counter name="黒見セリカ" />
      {showShiroko && <Counter name="砂狼シロコ" />}
      <label>
        <input
          type="checkbox"
          className="checkbox"
          checked={showShiroko}
          onChange={(e) => {
            setShowShiroko(e.target.checked);
          }}
        />
        Show Shiroko
      </label>
    </div>
  );
}

function Counter({ name }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h2>{name}</h2>
      <h3>{score}</h3>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

const counters = createRoot(document.getElementById("counters"));
counters.render(<Counters />);

function FancyCounters({ name, isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = " counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h2>{name}</h2>
      <h3>{score}</h3>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

function FancyCounter() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <>
      {isFancy ? (
        <FancyCounters name="陸八魔アル" isFancy={true} />
      ) : (
        <FancyCounters name="陸八魔アル" isFancy={false} />
      )}
      <label>
        <input
          type="checkbox"
          className="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use Aru Red style
      </label>
    </>
  );
}

const Fancy = createRoot(document.getElementById("Fancy"));
Fancy.render(<FancyCounter />);

function PausableCounter() {
  const [isPaused, setIspaused] = useState(false);
  return (
    <>
      {isPaused ? (
        <p>
          <b>See you later</b>
        </p>
      ) : (
        <Counter name="浅黄ムツキ" />
      )}
      <label>
        <input
          type="checkbox"
          className="checkbox"
          checked={isPaused}
          onChange={(e) => setIspaused(e.target.checked)}
        />
        Take a break
      </label>
    </>
  );
}

const pCounter = createRoot(document.getElementById("pCounter"));
pCounter.render(<PausableCounter />);

function FancyCounter2() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <>
      {isFancy ? (
        <div>
          <h2>div</h2>
          <FancyCounters name="陸八魔アル" isFancy={true} />
        </div>
      ) : (
        <section>
          <h2>section</h2>
          <FancyCounters name="陸八魔アル" isFancy={false} />
        </section>
      )}
      <label>
        <input
          type="checkbox"
          className="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use Aru Red style
      </label>
    </>
  );
}

const fancy2 = createRoot(document.getElementById("fancy2"));
fancy2.render(<FancyCounter2 />);

