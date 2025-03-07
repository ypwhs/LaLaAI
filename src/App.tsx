// src/App.tsx
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage }  from "./home";
import { RoadmapPage } from "./roadmap";
import  Blogpage from "./blog";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
    </Router>
  );
};

export default App;
