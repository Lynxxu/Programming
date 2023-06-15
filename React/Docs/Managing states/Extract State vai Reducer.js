import React, { useState, useReducer } from "react";
import { createRoot } from "react-dom/client";

function StudentList({ list, onEditList, onDeleteList }) {
  return (
    <>
      {list.map((student) => (
        <span key={student.id}>
          <br />
          <Student
            student={student}
            onEdit={onEditList}
            onDelete={onDeleteList}
          />
        </span>
      ))}
    </>
  );
}

function Student({ student, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let studentInfo;
  if (isEditing) {
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
  } else {
    studentInfo = (
      <>
        {student.name}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
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
        present: false,
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

let nextId2 = 3;
const initialList2 = [
  { id: 0, name: "銀鏡イオリ", present: true },
  { id: 1, name: "赤司ジュンコ", present: false },
  { id: 2, name: "黒舘ハルナ", present: false },
];

function studentReducer(studentList, action) {
  switch (action.type) {
    case "added": {
      return [
        ...studentList,
        {
          id: action.id,
          name: action.name,
          present: false,
        },
      ];
    }
    case "changed": {
      return studentList.map((s) => {
        if (s.id === action.student.id) {
          return action.student;
        } else {
          return s;
        }
      });
    }
    case "deleted": {
      return studentList.filter((s) => s.id !== action.id);
    }
    default: {
      throw Error("Unknwon action: " + action.type);
    }
  }
}

export default function StudentListAppRed() {
  const [studentList, dispatch] = useReducer(studentReducer, initialList2);
  function handleAddStudent(name) {
    dispatch({
      type: "added",
      id: nextId2++,
      name: name,
    });
  }

  function handleChangeStudent(student) {
    dispatch({
      type: "changed",
      student: student,
    });
  }

  function handleDeleteStudent(studentId) {
    dispatch({
      type: "deleted",
      id: studentId,
    });
  }
  return (
    <>
      <h2>Gehanna Student List</h2>
      <AddStudent onAddStudent={handleAddStudent} />
      <StudentList
        list={studentList}
        onEditList={handleChangeStudent}
        onDeleteList={handleDeleteStudent}
      />
    </>
  );
}

const studentList2 = createRoot(document.getElementById("studentList2"));
studentList2.render(<StudentListAppRed />);
