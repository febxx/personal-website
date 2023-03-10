import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Projects from "./pages/Projects";
import {Routes, Route} from "react-router-dom"
import Background from "./components/Background";

function App() {
  return (
    <Background>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Admin />} path='/febri' />
        <Route element={<Projects />} path='/projects' />
      </Routes>
    </Background>
  );
}

export default App;
