import React, { forwardRef, useRef } from "react";
import { createRoot } from "react-dom/client";

function InputButton() {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus the input
      </button>
    </>
  );
}

const Input = createRoot(document.getElementById("input"));
Input.render(<InputButton />);

function AnimeScroll() {
  const firstGirlRef = useRef(null);
  const secondGirlRef = useRef(null);
  const thirdGirlRef = useRef(null);

  return (
    <>
      <nav>
        <button
          onClick={() =>
            firstGirlRef.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            })
          }
        >
          Kiana (HoV)
        </button>
        <button
          onClick={() =>
            secondGirlRef.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            })
          }
        >
          Kiana
        </button>
        <button
          onClick={() =>
            thirdGirlRef.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            })
          }
        >
          Fuka
        </button>
      </nav>
      <div className="gallery">
        <img
          src="../../../Imgs/PC wallpaper/79799064_p0.jpg"
          ref={firstGirlRef}
        />

        <img
          src="../../../Imgs/PC wallpaper/80644926_p1.jpg"
          ref={secondGirlRef}
        />

        <img
          src="../../../Imgs/PC wallpaper/83580087_p0.jpg"
          ref={thirdGirlRef}
        />
      </div>
    </>
  );
}

const gallery = createRoot(document.getElementById("gallery"));
gallery.render(<AnimeScroll />);

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

function Form() {
  const inputRef = useRef(null);
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}

const form = createRoot(document.getElementById("form"));
form.render(<Form />);
