import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import {LoadingScreen} from "./components/LoadingScreen.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {MobileMenu} from "./components/MobileMenu.jsx";
import {Home} from "./components/sections/Home.jsx";
import {About} from "./components/sections/About.jsx";
import {Projects} from './components/sections/Projects.jsx';
import {Contact} from './components/sections/Contact.jsx';
import { ChatroomProject } from './components/projects/ChatroomProject.jsx';
import { MedicalProject } from './components/projects/MedicalProject.jsx';
import { StoreProject } from './components/projects/StoreProject.jsx';
import { ManagementProject } from './components/projects/ManagementProject.jsx';
import "./index.css"
import {useState} from "react";

function MainLayout() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function AppContent() {
  const[isLoading, setIsLoading] = useState(false);
  const[menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // Show navbar only on the main page
  const isMainPage = location.pathname === '/' || location.pathname === '/mounirEDG/';

  return(
  <>
    {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? ' opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
      {isMainPage && (
        <>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
      )}
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/mounirEDG" element={<MainLayout />} />
        <Route path="/chatroom" element={<ChatroomProject />} />
        <Route path="/medical" element={<MedicalProject />} />
        <Route path="/store" element={<StoreProject />} />
        <Route path="/management" element={<ManagementProject />} />
        {/* Catch-all route */}
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </div>
  </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
