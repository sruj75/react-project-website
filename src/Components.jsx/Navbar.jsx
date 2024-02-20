import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed z-[999] h-20 w-full px-20 font-['Uber_Move'] text-lg flex justify-between items-center " >
      <div className="logo text-2xl text-red-700 font-['Uber_Move']" >
      Sruj75
      </div>
      <div className="links flex gap-10 ">
{["current", "Projects", "about me", "wassup", "contact"].map(
  (item, index) => (<a key={index} className={` capitalize text-red-700 ${ index=== 4 && "ml-32"}`}>{item}</a>)
)}
      </div>
    </div>
  )
}
