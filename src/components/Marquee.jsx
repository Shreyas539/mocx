import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004d43] '>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden">
        <motion.h1 initial={{ x : 0 }} animate={{ x : "-100%" }} transition={{ease: "linear" , repeat: Infinity, duration:5}} className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] uppercase mb-7 mt-7 font-semibold'>we are <span className='text-green-700'>mocx</span></motion.h1>
        <motion.h1 initial={{ x : 0 }} animate={{ x : "-100%" }} transition={{ease: "linear" , repeat: Infinity, duration:5}} className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] uppercase mb-7 mt-7 font-semibold'>we are <span className='text-green-700'>mocx</span></motion.h1>
        <motion.h1 initial={{ x : 0 }} animate={{ x : "-100%" }} transition={{ease: "linear" , repeat: Infinity, duration:5}} className='text-[17vw] leading-none font-["Test_Founders_Grotesk_X-Condensed"] uppercase mb-7 mt-7 font-semibold'>we are <span className='text-green-700'>mocx</span></motion.h1>
      </div>
    </div>
  )
}

export default Marquee
