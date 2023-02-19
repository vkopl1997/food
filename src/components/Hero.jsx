import React from 'react'

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[550px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[550px] bg-black/40 flex flex-col
            justify-center'>
                <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h2>
                <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods</span> Delivered</h2>
            </div>
            <img className='w-full max-h-[550px] object-cover' src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero desc'/>
        </div>
    </div>
  )
}
