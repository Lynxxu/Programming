import React from "react";
import { createRoot } from "react-dom/client";

function Button() {
  function handleClick() {
    alert("Some message");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

const btnTest = createRoot(document.getElementById("btnTest"));
btnTest.render(<Button />);

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function BtnList() {
  return (
    <>
      <AlertButton message="btnOne">Button one</AlertButton>
      <AlertButton message="btnTwo">Button two</AlertButton>
    </>
  );
}

const btnList = createRoot(document.getElementById("btnList"));
btnList.render(<BtnList />);

function ButtonGeneral({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ musicName }) {
  function handlePlayClick() {
    alert(`playing ${musicName}`);
  }
  return (
    <ButtonGeneral onClick={handlePlayClick}>Play {musicName}</ButtonGeneral>
  );
}

function UploadButton() {
  return (
    <ButtonGeneral onClick={() => alert("uploading")}>
      Upload image
    </ButtonGeneral>
  );
}

function BtnBar() {
  return (
    <>
      <PlayButton musicName="六等星の夜" />
      <UploadButton />
    </>
  );
}

const btnBar = createRoot(document.getElementById("btnBar"));
btnBar.render(<BtnBar />);

function BubbleBtn() {
  return (
    <div
      className="BubbleBtnBG"
      onClick={() => {
        alert("u clicked the background");
      }}
    >
      <button
        onClick={() => {
          alert("Playing");
        }}
      >
        Play Music
      </button>
      <button
        onClick={() => {
          alert("Uploading");
        }}
      >
        Upload img
      </button>
    </div>
  );
}

const BubbleBar = createRoot(document.getElementById("bubbleBar"));
BubbleBar.render(<BubbleBtn />);

function FormTest() {
  return (
    <form onSubmit={() => alert("submission success")}>
      <input />
      <button>send, refresh by default</button>
    </form>
  );
}

const FormTst = createRoot(document.getElementById("form"));
FormTst.render(<FormTest />);

function FormTest1() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("submission success");
      }}
    >
      <input />
      <button>send, default prevented</button>
    </form>
  );
}

const FormTst2 = createRoot(document.getElementById("form1"));
FormTst2.render(<FormTest1 />);
