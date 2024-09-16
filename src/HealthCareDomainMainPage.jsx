import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import CoachSignUp from './components/CoachSignup';
import CoachLogin from './components/CoachLogin';
function HealthCareDomainMainPage() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/coachsignup" element={<CoachSignUp />} />
            <Route path="/coachlogin" element={<CoachLogin />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default HealthCareDomainMainPage