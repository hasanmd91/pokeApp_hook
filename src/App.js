import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Components/pages/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Pokelist from "./Components/Pokelist";
import Notfound from "./Components/Notfound";
import Pokesingle from "./Components/Pokesingle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokelist" element={<Pokelist />} />
          <Route path="pokelist/:pokesingle" element={<Pokesingle />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
