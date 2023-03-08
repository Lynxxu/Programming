import React from "react";
import { createRoot } from "react-dom/client";

let lib = {
  Eclipse: {
    name: "Fuhua: Eclipse",
    imgURL: "../../Resources/img/Eclipse.jpg",
  },
  WhiteNight: {
    name: "Fuhua: Baiye",
    imgURL: "../../Resources/img/WhiteNight.jpg",
  },
  Xunyu: { name: "Fuhua: Xunyu", imgURL: "../../Resources/img/xunyu.jpg" },
};

function getPersonInfo(CodeName) {
  return lib[CodeName];
}

function Avatar({ CodeName, size }) {
  return (
    <img
      className="avatar"
      src={getPersonInfo(CodeName).imgURL}
      alt={getPersonInfo(CodeName)}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar size={100} CodeName={"Eclipse"} />
      <Avatar size={80} CodeName={"WhiteNight"} />
      <Avatar size={60} CodeName={"Xunyu"} />
    </div>
  );
}

function Gallery({ children }) {
  return <div className="gallery">{children}</div>;
}

function ProfileFlex() {
  return (
    <Gallery>
      <Avatar size={100} CodeName={"Eclipse"} />
      <Avatar size={80} CodeName={"WhiteNight"} />
      <Avatar size={60} CodeName={"Xunyu"} />
    </Gallery>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Profile />);

const gallery2 = createRoot(document.getElementById("gallery2"));
gallery2.render(<ProfileFlex />);
