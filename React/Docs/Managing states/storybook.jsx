import React from "react";
import { createRoot } from "react-dom/client";

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
let statuses = ["empty", "typing", "submitting", "success", "error"];

function Storybook() {
  return (
    <>
      {statuses.map((status) => (
        <section key={status}>
          <h4>Form({status}):</h4>
          <Form2 status={status}></Form2>
        </section>
      ))}
    </>
  );
}

const storybook = createRoot(document.getElementById("storybook"));
storybook.render(<Storybook />);
