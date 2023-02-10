import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Background from "./components/Background";

function App() {
  return (
    <Background>
      <Nav />
      <Hero />
      <Project />
    </Background>
  );
}

export default App;
