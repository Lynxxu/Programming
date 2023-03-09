import React from "react";
import { useState } from "react";
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

const CounteTwo = createRoot(document.getElementById("counter2"));
CounteTwo.render(<CounterTwo />);

const CounteOne = createRoot(document.getElementById("counter1"));
CounteOne.render(<CounterOne />);

const testForm = createRoot(document.getElementById("testForm"));
testForm.render(<Form />);
