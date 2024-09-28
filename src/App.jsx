import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {ThemeProvider} from "./theme-Context";

import Navbar from "./componets/Navbar";
import About from "./page/About";
import Blog from "./page/Blog";
import Home from "./page/Home";

import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

