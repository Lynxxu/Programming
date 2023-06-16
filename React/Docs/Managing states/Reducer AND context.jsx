import React, { useState, useReducer, useContext, createContext } from "react";
import { createRoot } from "react-dom/client";

function StudentList({ onEditList, onDeleteList }) {
  const list = useContext(StudentListContext);
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
  const dispatch = useContext(StudentDispatchContext);
  let studentInfo;
  if (isEditing) {
    studentInfo = (
      <>
        <input
          value={student.name}
          onChange={(e) => {
            dispatch({
              ...student,
              name: e.target.value,
            });
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
          dispatch({ ...student, present: e.target.checked });
        }}
      />
      {studentInfo}
      <button onClick={() => dispatch({ type: "deleted", id: student.id })}>
        Delete
      </button>
    </label>
  );
}

let nextId2 = 3;
const initialList2 = [
  { id: 0, name: "銀鏡イオリ", present: true },
  { id: 1, name: "赤司ジュンコ", present: false },
  { id: 2, name: "黒舘ハルナ", present: false },
];

function AddStudent() {
  const [addName, onAddName] = useState("");
  const dispatch = useContext(StudentDispatchContext);
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
          dispatch({
            type: "added",
            id: nextId2++,
            name: addName,
          });
        }}
      >
        Add
      </button>
    </>
  );
}

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

  return (
    <StudentListContext.Provider value={studentList}>
      <StudentDispatchContext.Provider value={dispatch}>
        <h2>Gehanna Student List</h2>
        <AddStudent />
        <StudentList />
      </StudentDispatchContext.Provider>
    </StudentListContext.Provider>
  );
}

const studentList2 = createRoot(document.getElementById("StudentList"));
studentList2.render(<StudentListAppRed />);

const StudentListContext = createContext(null);
const StudentDispatchContext = createContext(null);
