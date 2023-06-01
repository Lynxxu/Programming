import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState("");
  const [isSent, setIsSent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for the message</h1>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Do you want to tell me somthing?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
    </form>
  );
}

function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

const form1 = createRoot(document.getElementById("form1"));
form1.render(<FeedbackForm />);

const initialTeam = [
  { name: "Hoshino", id: 0 },
  { name: "Serika", id: 1 },
  { name: "Ayane", id: 2 },
  { name: "Shiroko", id: 3 },
];

function Team() {
  const [team, setTeam] = useState(initialTeam);
  const [selectedMember, setSelectedMember] = useState(team[0]);

  function handleTeamChange(id, e) {
    setTeam(
      team.map((member) => {
        if (member.id === id) {
          return { ...member, name: e.target.value };
        } else {
          return member;
        }
      })
    );
  }

  return (
    <>
      <h2>What's the members of your team?</h2>
      <ul>
        {team.map((member) => (
          <li key={member.id}>
            <input
              value={member.name}
              onChange={(e) => {
                handleTeamChange(member.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setSelectedMember(member);
              }}
            >
              choose
            </button>
          </li>
        ))}
      </ul>
      <p>U picked {selectedMember.name}</p>
    </>
  );
}

const form2 = createRoot(document.getElementById("form2"));
form2.render(<Team />);

function Team2() {
  const [team, setTeam] = useState(initialTeam);
  const [selectedId, setSelectedId] = useState(0);

  const selectedMember = team.find((member) => member.id === selectedId);

  function handleTeamChange(id, e) {
    setTeam(
      team.map((member) => {
        if (member.id === id) {
          return { ...member, name: e.target.value };
        } else {
          return member;
        }
      })
    );
  }

  return (
    <>
      <h2>What's the members of your team?</h2>
      <ul>
        {team.map((member, index) => (
          <li key={member.id}>
            <input
              value={member.name}
              onChange={(e) => {
                handleTeamChange(member.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setSelectedId(member.id);
              }}
            >
              choose
            </button>
          </li>
        ))}
      </ul>
      <p>U picked {selectedMember.name}</p>
    </>
  );
}

const form3 = createRoot(document.getElementById("form3"));
form3.render(<Team2 />);

const studentList = {
  id: 0,
  title: "Kivotos",
  childAcademies: [
    {
      id: 1,
      title: "Abydos",
      childStudents: [
        {
          id: 2,
          name: "Shiroko",
        },
        {
          id: 3,
          name: "Serika",
        },
        {
          id: 4,
          name: "Hoshino",
        },
      ],
    },
    {
      id: 5,
      title: "Trinity",
      childStudents: [
        {
          id: 6,
          name: "Hanako",
        },
        {
          id: 7,
          name: "Hifumi",
        },
        {
          id: 8,
          name: "Azusa",
        },
      ],
    },
  ],
};

function StudentTree({ academy }) {
  const childStudents = academy.childStudents;
  return (
    <li>
      {academy.title}
      {childStudents.length > 0 && (
        <ol>
          {childStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ol>
      )}
    </li>
  );
}

export default function StudentList() {
  const [students, setStudents] = useState(studentList);
  const academies = students.childAcademies;
  return (
    <>
      <h2>Student List</h2>
      <ol>
        {academies.map((academy) => (
          <StudentTree key={academy.id} academy={academy} />
        ))}
      </ol>
    </>
  );
}
4;
const form4 = createRoot(document.getElementById("form4"));
form4.render(<StudentList />);

const studentListFlat = {
  0: {
    id: 0,
    title: "Kivotos",
    childIds: [1, 5],
  },
  1: {
    id: 1,
    title: "Abydos",
    childIds: [2, 3, 4],
  },
  2: {
    id: 2,
    title: "Shiroko",
    childIds: [],
  },
  3: {
    id: 3,
    title: "Serika",
    childIds: [],
  },
  4: {
    id: 4,
    title: "Hoshino",
    childIds: [],
  },
  5: {
    id: 5,
    title: "Trinity",
    childIds: [6, 7, 8],
  },
  6: {
    id: 6,
    title: "Hanako",
    childIds: [],
  },
  7: {
    id: 7,
    title: "Hifumi",
    childIds: [],
  },
  8: {
    id: 8,
    title: "Azusa",
    childIds: [],
  },
};

function ClassList() {
  const [list, setList] = useState(studentListFlat);
  const root = list[0];
  const RootIds = root.childIds;

  function handlePresent(parentId, childId) {
    const parent = list[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setList({
      ...list,
      [parentId]: nextParent,
    });
  }

  return (
    <>
      <h2>Student List</h2>
      <ol>
        {RootIds.map((id) => (
          <StudentTreeFlat
            key={id}
            id={id}
            parentId={0}
            onPresent={handlePresent}
            studentsById={list}
          />
        ))}
      </ol>
    </>
  );
}

function StudentTreeFlat({ id, parentId, studentsById, onPresent }) {
  const student = studentsById[id];
  const childIds = student.childIds;

  return (
    <li>
      {student.title}{" "}
      <button
        onClick={() => {
          onPresent(parentId, id);
        }}
      >
        Present
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <StudentTreeFlat
              key={childId}
              id={childId}
              parentId={id}
              studentsById={studentsById}
              onPresent={onPresent}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

const form5 = createRoot(document.getElementById("form5"));
form5.render(<ClassList />);