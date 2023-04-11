import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectsDetails from '../pages/projectsDetails/ProjectsDetail';
import Home from './../pages/home/Home';

//Pages

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<ProjectsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
