import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Skills from './../pages/Skills';
import Projects from './../pages/Projects';
import Contact from '../pages/Contact';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MainRoutes;
