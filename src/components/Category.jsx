import React from 'react';
import { categories } from '../data/data';

export const Category = () => {
  return (
    <div className='max-w-[1640px] p-4 py-12 m-auto '>
        <h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h2>
        {/* categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((item,index)=>(
                <div key={index} className='bg-gray-100 rounded-lg flex justify-between items-center'>
                    <h3 className='font-bold sm:text-xl'>{item.name}</h3>
                    <img src={item.image} alt={item.name}
                    className='w-20'
                     />

                </div>
            ))}

        </div>
    </div>
  )
}
