import React from 'react'
import Navbar from "./Components.jsx/Navbar";
import LandingPage from './Components.jsx/LandingPage';
import Marque from './Components.jsx/Marque';

function App() {
  return (
    <div className=' w-full h-screen text-white font-extralight'>
      <Navbar/>
      <LandingPage/>
      <Marque/>
    </div>
  )
}

export default App;