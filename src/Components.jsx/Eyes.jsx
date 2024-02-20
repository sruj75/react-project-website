import React, { useEffect, useRef, useState }from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect (()=>{
    window.addEventListener("mousemove", (e)=> {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let deltaX = mouseX - window.innerWidth/2;
    let deltaY = mouseY - window.innerHeight/2;
   
    var angle = Math.atan2 (deltaY, deltaX) * (180/Math.PI);
    setRotate (angle-180);
})
})

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className=' relative w-full h-full bg-cover bg-center bg-black'>
        <div className=" absolute flex gap-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 h-96 bg-black">

        <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
           <div className='relative w-2/3 h-2/3 rounded-full bg-red-700'>
             <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
               <div className='w-10 h-10 rounded-full bg-black'>
            
               </div>
             </div>
           </div>
        </div>
        <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
           <div className='relative w-2/3 h-2/3 rounded-full bg-red-700'>
             <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
               <div className='w-10 h-10 rounded-full bg-black'>
            
               </div>
             </div>
           </div>
        </div>

        </div>    
      </div>
      
      </div>
  )
}

export default Eyes