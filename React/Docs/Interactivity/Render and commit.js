import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Form() {
  const [isSent, setIsSend] = useState(false);
  const [message, setMessage] = useState("Hi!");

  if (isSent) {
    return <h1>Your msg is on the way</h1>;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSend(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </>
  );
}

function CounterOne() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}

function CounterTwo() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 3);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +3
      </button>
    </>
  );
}

function CounterThree() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}

function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function RequestTracker2() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((pending) => pending + 1);
    await delay(3000);
    setPending((pending) => pending - 1);
    setCompleted((completed) => completed + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

const CounteTwo = createRoot(document.getElementById("counter2"));
CounteTwo.render(<CounterTwo />);

const CounteOne = createRoot(document.getElementById("counter1"));
CounteOne.render(<CounterOne />);

const testForm = createRoot(document.getElementById("testForm"));
testForm.render(<Form />);

const CounteThree = createRoot(document.getElementById("counter3"));
CounteThree.render(<CounterThree />);

const requestTracker = createRoot(document.getElementById("requestTracker"));
requestTracker.render(<RequestTracker />);

const requestTracker2 = createRoot(document.getElementById("requestTracker2"));
requestTracker2.render(<RequestTracker2 />);
