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
