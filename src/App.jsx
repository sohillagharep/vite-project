import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./componants/Static/Navbar";

import Home from "./componants/Routing/Home";
import About from "./componants/Routing/About";
import Skills from "./componants/Routing/Skills";
import Contact from "./componants/Routing/Contact";
import Projects from "./componants/Routing/Projects";
import Education from "./componants/Routing/Education";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "bg-dark text-white min-vh-100"
            : "bg-light text-dark min-vh-100"
        }
      >
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} />}
          />

          <Route
            path="/about"
            element={<About darkMode={darkMode} />}
          />

          <Route
            path="/education"
            element={<Education darkMode={darkMode} />}
          />

          <Route
            path="/skills"
            element={<Skills darkMode={darkMode} />}
          />

          <Route
            path="/projects"
            element={<Projects darkMode={darkMode} />}
          />

          <Route
            path="/contact"
            element={<Contact darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}