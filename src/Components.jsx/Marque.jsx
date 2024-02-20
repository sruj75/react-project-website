import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div className="w-full py-10 bg-red-700">
      <div className='text border-t-5 border-b-5 flex gap-20 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x: 0}} animate={{x: "-200%"}} transition={{ease: 'linear', repear: Infinity, duration: 80}} className='text-[17vw] text-black leading-none uppercase -mb-10 -mt-10 pb-10 font-["Times_New_Roman"]'>god ends here</motion.h1> 
        <motion.h1 initial={{x: 0}} animate={{x: "-200%"}} transition={{ease: 'linear', repear: Infinity, duration: 80}} className='text-[17vw] text-black leading-none uppercase -mb-10 -mt-10 pb-10 font-["Times_New_Roman"]'>god ends here</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-200%"}} transition={{ease: 'linear', repear: Infinity, duration: 80}} className='text-[17vw] text-black leading-none uppercase -mb-10 -mt-10  pb-10 font-["Times_New_Roman"]'>god ends here</motion.h1>
      </div>
    </div>
  )
}

export default Marque