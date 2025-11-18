import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home.jsx';
import Resume from './pages/resume.jsx'
import Contact from './pages/contact.jsx';
import Travel from './pages/travel.jsx';

function App() {

  return (
    
    <BrowserRouter>
    <div className='main-content-wrapper'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </div>
      
    </BrowserRouter>
  )
}

export default App
