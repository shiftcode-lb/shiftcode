import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoadingScreen from './components/LoadingScreen';
import TechBackground from './components/TechBackground';
import StructuredData from './components/StructuredData';
import WhatsAppFloat from './components/WhatsAppFloat';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <StructuredData />
      <LoadingScreen onFinish={() => setLoading(false)} />
      <div
        className={`min-h-screen bg-background relative transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <TechBackground />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
        <WhatsAppFloat />
      </div>
    </>
  )
}

export default App
