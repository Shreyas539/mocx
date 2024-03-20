import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[Neue_Montreal] text-[4vw] leading-[4.5vw]'>
            At Mocx, we craft stunning websites that captivate your audience and drive meaningful results. With a focus on innovation and creativity, we bring your vision to life, ensuring each site reflects your brand.
        </h1>

        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#8d9f4b]'>
            <div className="w-1/2">
                <h1 className="text-7xl">Our Approach</h1>
                <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read more
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-red-200'></div>
        </div>
    </div>
  )
}

export default About
