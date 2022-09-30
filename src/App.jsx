import { useContext } from "react";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Home from "./components/Home/home";
import Skills from "./components/Skills/skills";
import Experience from "./components/Experience/experience";
import ProjectList from "./components/Home/ProjectList";
import Toggle from "./components/Toggle/toggle";
import Navbars from "./components/Home/navbar";
import ResumePdf from "./components/Home/resumepdf";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <BrowserRouter>
    <>
    
   <Navbars/>
   <Toggle />
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ResumePdf" element={<ResumePdf/>}/>
           <Route path="/About" element={<About/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/ProjectList" element={<ProjectList/>}/>
          <Route path="/Experience" element={<Experience/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        {/* <Navbars />
      <Toggle />
      <Home />
      <About />
      <ProjectList />
      <Contact /> */}
        </Routes>
      
     
    </div>
    </>
    </BrowserRouter>
  );
};

export default App;