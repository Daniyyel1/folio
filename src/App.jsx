import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Main from "./components/layout/Main";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Shelf from "./components/pages/Shelf";
import Read from "./components/pages/Read";
import Readd from "./components/pages/Readd";
import ScrollTop from "./components/pages/ScrollTop";
import Work from "./components/pages/Work";

function App() {
  return (
    <div className="app">
      <ScrollTop />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/shelf" element={<Shelf />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/read" element={<Read />} />
          <Route path="/readd" element={<Readd />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
