import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Resume from "./Resume";
import Projects from "./Projects";
import Blog from "./Blog";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
