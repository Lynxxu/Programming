import React from "react";
import { createRoot } from "react-dom/client";

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} √</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Jim's luggage list</h1>
      <ul>
        <Item isPacked={true} name="lube" />
        <Item isPacked={true} name="tissue paper" />
        <Item isPacked={false} name="javalin" />
      </ul>
    </section>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<PackingList />);

function ItemCheck({ name, isPacked }) {
  return <li>{isPacked ? <del>{name + "√"}</del> : name}</li>;
}

function PackingListUpdate() {
  return (
    <section>
      <h1>Jim's luggage list</h1>
      <ul>
        <ItemCheck isPacked={true} name="lube" />
        <ItemCheck isPacked={true} name="tissue paper" />
        <ItemCheck isPacked={false} name="javalin" />
      </ul>
    </section>
  );
}

const crossed = createRoot(document.getElementById("crossed"));
crossed.render(<PackingListUpdate />);

const people = [
  "Jim: Biochemistry",
  "WIll: Chemistry",
  "Chalin: Math and Stats",
  "Oscar: cog science",
];

function List1() {
  const listItem = people.map((person) => <li>{person}</li>);
  return <ul>{listItem}</ul>;
}

const list1 = createRoot(document.getElementById("list1"));
list1.render(<List1 />);

const people2 = [
  {
    id: 0,
    name: "Jim",
    major: "BioChem",
  },
  {
    id: 1,
    name: "Will",
    major: "Chem",
  },
  {
    id: 2,
    name: "Chalin",
    major: "math and stats",
  },
  {
    name: "Oscar",
    major: "cog sci",
  },
  {
    name: "KK",
    major: "Chem",
  },
];

const chemists = people2.filter((person) => person.major === "Chem");

function List2() {
  const listItem2 = chemists.map((person) => <li>Name: {person.name}</li>);
  return (
    <>
      <h3>List of Chem major students</h3>
      <ul>{listItem2}</ul>
    </>
  );
}

const list2 = createRoot(document.getElementById("list2"));
list2.render(<List2 />);
