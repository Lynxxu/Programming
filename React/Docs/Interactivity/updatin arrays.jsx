import React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

let Id = 0;

function ListAppend() {
  const [name, setName] = useState("Will");
  const [people, setPeople] = useState([]);

  return (
    <>
      <h3>Inspiring students: </h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setPeople([...people, { id: Id++, name: name }]);
        }}
      >
        ADD
      </button>
      <ul>
        {people.map((people) => (
          <li key={people.Id}>{people.name}</li>
        ))}
      </ul>
    </>
  );
}

const listAppend = createRoot(document.getElementById("listAppend"));
listAppend.render(<ListAppend />);
