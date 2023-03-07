import React from "react";
import { createRoot } from "react-dom/client";

function Profile() {
  return <img src="../../../../Imgs/83181495_p0.jpg" alt="Katherine Johnson" />;
}

let App = function Gallery() {
  return (
    <section>
      <h1>Amazing fuhua</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
