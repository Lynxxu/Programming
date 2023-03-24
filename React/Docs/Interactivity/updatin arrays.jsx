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

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 1350 },
  { id: 1, type: "square", x: 150, y: 1350 },
  { id: 2, type: "circle", x: 250, y: 1350 },
];

function ShapeEditor() {
  const [shapes, setShape] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShape(nextShapes);
  }
  return (
    <>
      <button onClick={handleClick}>Move circles down</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "black",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
}

const moveCircle = createRoot(document.getElementById("moveCircle"));
moveCircle.render(<ShapeEditor />);
