import React from 'react'

export default function Navbar() {
  return (
    <div >
      <div className="logo">

      </div>
      <div className="links">
{["service", "service", "service", "service"].map(
  (item, index) => (<a key={index} className='text-white'>{item}</a>)
)}
      </div>
    </div>
  )
}
