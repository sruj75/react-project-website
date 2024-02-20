import React from 'react'

function LandingPage() {
  return (
    <div className=" w-full h-screen pt-1 text-red-700 bg-black">
  
  <div className="textstructure mt-20 mb-80 px-20"> 
  {["portfolio?", "The hell is empty", " And all the devils are here"].map ((item, index)=> {
    return <div className="masker font-['Times_New_Roman'] ">
         <h1 className="text-7xl uppercase leading-none font-medium">
     {item}
        </h1>
        </div>
  })}
    </div>

    <div className="border-t-[1px] border-gray-700 mt-52 flex  justify-between py-5 px-20"> 
    {["I'm waiting in my cold cell when the bell begins to chime, reflecting on my past life and it doesnt have much time."].map ((item, index)=>(
    <p className="text-lg font-['Uber_Move'] leading-none">
      {item}</p>))}
      <div className="start flex items-center gap-3">
      <div className="px-4 py-2 border-[1px] font-semibold font-['Uber_Move'] border-red-700 text-sm capitalize rounded-full"> Choose your Kill </div>
      <div className=" px-2 py-1 rounded-full border-[2px] items-center font-bold justify-center border-black "> ^ </div>
      </div>
    </div>

    </div>
  )
}

export default LandingPage