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

function ListRemove() {
  let initialStudent = [
    { id: 0, name: "chalin" },
    { id: 1, name: "WILL" },
    { id: 2, name: "jim" },
  ];
  const [students, setStudents] = useState(initialStudent);
  return (
    <>
      <h3>Inspiring students: </h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name + "  "}
            <button
              onClick={() => {
                setStudents(students.filter((e) => e.id !== student.id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

const listRemove = createRoot(document.getElementById("listRemove"));
listRemove.render(<ListRemove />);
