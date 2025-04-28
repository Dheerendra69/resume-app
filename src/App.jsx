import { useEffect } from "react";
import "./App.css";
import Achievements from "./components/Achievements/Achievements";
import Certifications from "./components/Certifications/Certifications";
import Contacts from "./components/Contacts/Contacts";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ResumeDownload from "./components/ResumeDownload/ResumeDownload";
import TechStack from "./components/TechStack/TechStack";

function App() {
  
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <Education />
      <TechStack />
      <Certifications />
      <Projects />
      <Achievements />
      <ResumeDownload />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
