import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    < div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
