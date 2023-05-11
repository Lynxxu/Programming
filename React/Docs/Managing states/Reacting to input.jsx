import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Form1(status = "empty") {
  if (status === "success") {
    return <h1>Thats correct</h1>;
  }
  return (
    <>
      <h2>Genshin pop quiz</h2>
      <p>What is the surname of Xianglin?</p>
      <form>
        <textarea />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

const form1 = createRoot(document.getElementById("form1"));
form1.render(<Form1 />);

export function Form2(status = "empty") {
  if (status === "success") {
    return <h1>Thats correct</h1>;
  }
  return (
    <>
      <h2>Genshin pop quiz</h2>
      <p>What is the surname of Xianglin?</p>
      <form>
        <textarea disabled={status === "submitting"} />
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "error" && (
          <p className="Error">Good guess but not the correct answer</p>
        )}
      </form>
    </>
  );
}

function FormFinal() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>Cograts, you are right</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (Error) {
      setStatus("typing");
      setError(Error);
    }
  }
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>Genshin pop quiz</h2>
      <p>What's the surname of Xianglin?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "mao";
      if (shouldError) {
        reject(new Error("Nope, thats wrong, try again"));
      } else {
        resolve();
      }
    }, 150);
  });
}

const formfinal = createRoot(document.getElementById("Formfinal"));
formfinal.render(<FormFinal />);
