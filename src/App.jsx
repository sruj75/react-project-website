import React from 'react'
import Navbar from "./Components.jsx/Navbar";
import LandingPage from './Components.jsx/LandingPage';
import Marque from './Components.jsx/Marque';
import About from './Components.jsx/About';
import Eyes from './Components.jsx/Eyes';

function App() {
  return (
    <div className=' w-full h-screen text-white font-extralight'>
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyes/>
    </div>
  )
}

export default App;