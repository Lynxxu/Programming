import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  );
}

function StudentInfo() {
  return (
    <>
      <h2>Kuromi Serika</h2>
      <Panel title="Basic information">
        Kuromi Serika (黒見 セリカ) is a student of Abydos high school in
        Kivotos. She is the secretary of the Abydos Coutermeasure committee.
        Age: 15, Birthday: June 25th, Height: 153cm
      </Panel>
      <Panel title="Story (spoiler alter)">
        One with many complaints, Serika is the type hesitant to show her
        emotions. Despite her daily habit of saying "It's fine if this school
        goes bankrupt", she has a deep love for her school and works tirelessly
        behind the backs of her clubmates to pay off her school's debt.
      </Panel>
    </>
  );
}

const Serika = createRoot(document.getElementById("serika"));
Serika.render(<StudentInfo />);

function Panel2({ title, children, isActive, onShow }) {
  return (
    <section className="Panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

function StudentInfo2() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Kuromi Serika</h2>
      <Panel2
        title="Basic Information"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Kuromi Serika (黒見 セリカ) is a student of Abydos high school in
        Kivotos. She is the secretary of the Abydos Coutermeasure committee.
        Age: 15, Birthday: June 25th, Height: 153cm
      </Panel2>
      <Panel2
        title="Story (SPOILER)"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        One with many complaints, Serika is the type hesitant to show her
        emotions. Despite her daily habit of saying "It's fine if this school
        goes bankrupt", she has a deep love for her school and works tirelessly
        behind the backs of her clubmates to pay off her school's debt.
      </Panel2>
    </>
  );
}
const Serika2 = createRoot(document.getElementById("serika2"));
Serika2.render(<StudentInfo2 />);
