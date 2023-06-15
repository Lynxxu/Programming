import React, { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

function Heading({ level, children }) {
  switch (level) {
    case 1: {
      return <h1>{children}</h1>;
    }
    case 2: {
      return <h2>{children}</h2>;
    }
    case 3: {
      return <h3>{children}</h3>;
    }
    case 4: {
      return <h4>{children}</h4>;
    }
  }
}

function Section({ children }) {
  return <section className="section">{children}</section>;
}

function KivotosPolitics() {
  return (
    <Section>
      <Heading level={1}>Kivotos</Heading>
      <Section>
        <Heading level={2}>Abydos</Heading>
        <Heading level={2}>Trinity</Heading>
        <Heading level={2}>Gehanna</Heading>
        <Heading level={2}>Millennium</Heading>
        <Section>
          <Heading level={3}>Foreclosure Task Force</Heading>
          <Heading level={3}>Justice Realization Committe</Heading>
          <Heading level={3}>Pandomium Society</Heading>
          <Heading level={3}>Seminar</Heading>
          <Section>
            <Heading level={4}>Hoshino</Heading>
            <Heading level={4}>Tsurugi</Heading>
            <Heading level={4}>Makoto</Heading>
            <Heading level={4}>Yuuka</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

const Kivotos = createRoot(document.getElementById("Kivotos"));

Kivotos.render(<KivotosPolitics />);
function Section2({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}

const LevelContext = createContext(1);

function Heading2({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1: {
      return <h1>{children}</h1>;
    }
    case 2: {
      return <h2>{children}</h2>;
    }
    case 3: {
      return <h3>{children}</h3>;
    }
    case 4: {
      return <h4>{children}</h4>;
    }
  }
}

function KivotosPolitics2() {
  return (
    <Section2 level={1}>
      <Heading2>Kivotos</Heading2>
      <Section2 level={2}>
        <Heading2>Abydos</Heading2>
        <Heading2>Trinity</Heading2>
        <Heading2>Gehanna</Heading2>
        <Heading2>Millennium</Heading2>
        <Section2 level={3}>
          <Heading2>Foreclosure Task Force</Heading2>
          <Heading2>Justice Realization Committe</Heading2>
          <Heading2>Pandomium Society</Heading2>
          <Heading2>Seminar</Heading2>
          <Section2 level={4}>
            <Heading2>Hoshino</Heading2>
            <Heading2>Tsurugi</Heading2>
            <Heading2>Makoto</Heading2>
            <Heading2>Yuuka</Heading2>
          </Section2>
        </Section2>
      </Section2>
    </Section2>
  );
}

const KivotosL = createRoot(document.getElementById("KivotosL"));
KivotosL.render(<KivotosPolitics2 />);

function Section3({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
