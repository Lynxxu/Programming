import React, { Fragment } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

const FuHuaList = [
  {
    id: "eclipse",
    name: "Eclipse",
    img: "../../Resources/img/Eclipse.jpg",
    element: "Electro",
    description: `Eclipse is an electro form of valkyrie FuHua, she was featured in the Schicksal's war as a subordinate to Otto. She deals with humanoid mobs very effectively`,
  },
  {
    id: "xunyu",
    name: "Xunyu",
    img: "../../Resources/img/xunyu.jpg",
    element: "Physical and Electro",
    description: `Xunyu was the first FuHua ever present in the Lore of Honkai Impact 3rd. She was a class monitor at the class where Mei, Kiana and Bronya were present and was a rank A valkyrie.`,
  },
  {
    id: "whitenight",
    name: "WhiteNight",
    img: "../../Resources/img/WhiteNight.jpg",
    element: "Physical",
    description:
      "WhiteNight (BaiYe) was an FuHua with no significant lore implication, simply a suit version of FuHua for disguise purpose. However, she was extremely strong in terms of game play and was the top physical valkyrie for a long time",
  },
];

function FuHuaStack() {
  const [index, setIndex] = useState(0);
  let fuHua = FuHuaList[index];
  return (
    <div className="listStyle">
      <h2>{fuHua.name}</h2>
      <button onClick={() => setIndex(index + 1)}>Next</button>
      <img src={fuHua.img} className="fuHuaPic"></img>
      <p>{fuHua.description}</p>
      <p>{index + 1}</p>
    </div>
  );
}

const fuHuaDisplay = createRoot(document.getElementById("fuHuaDisplay"));
fuHuaDisplay.render(<FuHuaStack />);

function FuHuaStackCollapsable() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let fuHua = FuHuaList[index];
  return (
    <div className="listStyle">
      <h2>{fuHua.name}</h2>
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        Next
      </button>
      <img src={fuHua.img} className="fuHuaPic"></img>
      <button
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Hide" : "Show"} description
      </button>
      {showMore && <p>{fuHua.description}</p>}
      <p>{index + 1}</p>
    </div>
  );
}

const fuHuaDisplayCollapsable = createRoot(
  document.getElementById("fuHuaDisplayCollapsable")
);
fuHuaDisplayCollapsable.render(<FuHuaStackCollapsable />);

function DualComponent() {
  return (
    <div className="flexComp">
      <FuHuaStackCollapsable />
      <FuHuaStackCollapsable />
    </div>
  );
}

const dualcomponent = createRoot(document.getElementById("dualcomponent"));
dualcomponent.render(<DualComponent />);

function FinalStack() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let fuHua = FuHuaList[index];
  return (
    <div className="listStyle">
      <h2>{fuHua.name}</h2>
      {index < 2 && (
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      )}
      {index > 0 && (
        <button
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          Previous
        </button>
      )}
      <img src={fuHua.img} className="fuHuaPic"></img>
      <button
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Hide" : "Show"} description
      </button>
      {showMore && <p>{fuHua.description}</p>}
      <p>{index + 1}</p>
    </div>
  );
}

const finalStack = createRoot(document.getElementById("finalStack"));
finalStack.render(<FinalStack />);
