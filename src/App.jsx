import React from 'react'
import Navbar from "./Components.jsx/Navbar";
import LandingPage from './Components.jsx/LandingPage';

function App() {
  return (
    <div className='bg-gray-900 w-full h-screen text-white font-extralight'>
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default App;