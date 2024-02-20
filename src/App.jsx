import React from 'react'
import Navbar from "./Components.jsx/Navbar";
import LandingPage from './Components.jsx/LandingPage';
import Marque from './Components.jsx/Marque';
import About from './Components.jsx/About';
import Eyes from './Components.jsx/Eyes';
import Footer from './Components.jsx/Footer';

function App() {
  return (
    <div className=' w-full h-screen text-white font-extralight'>
      <Navbar/>
      <Eyes/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App;