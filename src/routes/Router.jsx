import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from '../pages/projects/Projects';
import Home from './../pages/home/Home';

//Pages

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
