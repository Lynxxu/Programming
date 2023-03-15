import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useImmer } from "use-immer";

function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "50vh",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -300,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

const movingDot = createRoot(document.getElementById("movingDot"));
movingDot.render(<MovingDot />);

function Form1() {
  const [person, setPerson] = useState({
    firstName: "Chalin",
    lastName: "Yang",
    email: "CHALINYANG@GMAIL.com",
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}

function Form2() {
  const [person, setPerson] = useState({
    firstName: "Chalin",
    lastName: "Yang",
    email: "CHALINYANG@GMAIL.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}

const form2 = createRoot(document.getElementById("form2"));
form2.render(<Form2 />);

const form1 = createRoot(document.getElementById("form1"));
form1.render(<Form1 />);

function Form3() {
  const [person, updatePerson] = useImmer({
    name: "Chalin",
    contact: {
      cell: "114514",
      home: "1919801",
      address: "shimo-kitazawa",
    },
  });

  function handleChange(e) {
    updatePerson((draft) => {
      draft.e.target.name = e.target.value;
    });
  }

  return (
    <>
      <label>
        name:
        <input name="name" value={person.name} onChange={handleChange} />
      </label>
      <label>
        cell
        <input
          name="cell"
          value={person.contact.cell}
          onChange={handleChange}
        />
      </label>
      <label>
        home:
        <input
          name="home"
          value={person.contact.home}
          onChange={handleChange}
        />
      </label>
      <label>
        address:
        <input
          name="address"
          value={person.contact.address}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.name} {person.cell} {person.home} ({person.email}) [Located in{" "}
        {person.contact.address}]
      </p>
    </>
  );
}
