import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full  bg-zinc-900 pt-1'>
        <div className='textstructure mt-[120px] px-20'>
            {["we create","breathtaking","websites"].map((item,index)=>{
                return (
                <div className="masker">
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && (
                            <div className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[1.2vw] bg-green-700'>
                            </div>
                        )}
                        <h1 className="pt-[2vw] mb-[1vw] uppercase text-[9vw] leading-[6.7vw] font-['Test_Founders_Grotesk_X-Condensed'] font-bold">
                            {item}
                        </h1>
                    </div>
                </div>
            );
            })} 
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-[50px] flex justify-between items-center py-5 px-20">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>
                    {item}
                </p>
            ))}
            <div className='start flex items-center gap-3 '>
                <div className='px-5 py-2 border-[2px] text-md border-zinc-400 rounded-full font-light uppercase'>
                    start the project
                </div>
                <div className='w-10 h-10 flex  justify-center border-[2px] border-zinc-400 rounded-full items-center'>
                    <FaArrowUpLong className='rotate-[45deg]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
