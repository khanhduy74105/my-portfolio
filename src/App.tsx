import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./sections/AboutSection";
import Holder from "./sections/Holder";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Holder />}>
            <Route path="about" element={<AboutSection />}/>
            <Route path="projects" element={<ProjectsSection />}/>
            <Route path="skills" element={<SkillsSection />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
