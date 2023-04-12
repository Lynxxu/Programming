import React from "react";
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
