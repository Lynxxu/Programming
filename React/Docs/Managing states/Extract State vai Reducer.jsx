import React, { useState, useReducer } from "react";
import { createRoot } from "react-dom/client";
import { studentReducer2 } from "Extract Reducer.jsx";

function StudentList({ list, onEditList, onDeleteList }) {
  return (
    <>
      {list.map((student) => (
        <label key={student.id}>
          <br />
          <Student
            student={student}
            onEdit={onEditList}
            onDelete={onDeleteList}
          />
        </label>
      ))}
    </>
  );
}

function Student({ student, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let studentInfo;
  if (!isEditing) {
    studentInfo = (
      <>
        {student.name} <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  } else {
    studentInfo = (
      <>
        <input
          value={student.name}
          onChange={(e) => {
            onEdit({ ...student, name: e.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={student.present}
          onChange={(e) => {
            onEdit({ ...student, present: e.target.checked });
          }}
        />
        {studentInfo}
        <button onClick={() => onDelete(student.id)}>Delete</button>
      </label>
    </>
  );
}

function AddStudent({ onAddStudent }) {
  const [addName, onAddName] = useState("");
  return (
    <>
      <input
        placeholder="Add Student"
        value={addName}
        onChange={(e) => onAddName(e.target.value)}
      />
      <button
        onClick={() => {
          onAddName("");
          onAddStudent(addName);
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
const initialList = [
  { id: 0, name: "銀鏡イオリ", present: true },
  { id: 1, name: "赤司ジュンコ", present: false },
  { id: 2, name: "黒舘ハルナ", present: false },
];

function StudentListApp() {
  const [studentList, setStudentList] = useState(initialList);

  function handleAddStudent(name) {
    setStudentList([
      ...studentList,
      {
        id: nextId++,
        name: name,
        done: false,
      },
    ]);
  }

  function handleChangeStudents(student) {
    setStudentList(
      studentList.map((s) => {
        if (s.id === student.id) {
          return student;
        } else {
          return s;
        }
      })
    );
  }

  function handleDeleteStudent(studentId) {
    setStudentList(studentList.filter((s) => s.id !== studentId));
  }

  return (
    <>
      <h2>Gehanna Student List</h2>
      <AddStudent onAddStudent={handleAddStudent} />
      <StudentList
        list={studentList} // There was a bug in here, where I wrote initalList instead of studentList, causing the program to freeze and not rendering.
        onEditList={handleChangeStudents}
        onDeleteList={handleDeleteStudent}
      />
    </>
  );
}

const studentList = createRoot(document.getElementById("studentList"));
studentList.render(<StudentListApp />);
