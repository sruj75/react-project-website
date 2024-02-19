import React from 'react'

function LandingPage() {
  return (
    <div className=" w-full h-screen bg-zinc-900 pt-1 text-white">
  
  <div className="textstructure mt-64 mb-80 px-20"> 
  {["The hell is empty", "and all the devils are here", ].map ((item, index)=> {
    return <div className="masker font-['Times_New_Roman'] ">
         <h1 className="text-6xl uppercase leading-none font-medium">
     {item}
        </h1>
        </div>
  })}
    </div>

    <div className="border-t-[1px] border-zinc-800 mt-52 flex font-thin justify-between py-5 px-20"> 
    {["Enter Heaven by Sacrifice", "Enter Hell by Murder"].map ((item, index)=>(
    <p className="text-md font-thin-light leading-none">
      {item}</p>))}
      <div className="start flex items-center gap-3">
      <div className="px-4 py-2 border-[1px] border-zinc-500 font-ight text-sm capitalize rounded-full"> Choose your Kill </div>
      <div className=" px-2 py-1 rounded-full border-[1px] items-center justify-center border-zinc-500  "> ^ </div>
      </div>
    </div>

    </div>
  )
}

export default LandingPage