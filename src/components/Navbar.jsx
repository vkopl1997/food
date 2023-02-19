import React,{useState} from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillTag,AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';


export const Navbar = () => {
    const [nav,setNav] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* //left side */}
        <div className='flex items-center'>
            <div className='cursor-pointer' onClick={()=>setNav(!nav)}>
                <AiOutlineMenu size={30}/>
            </div>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl px-2 '>
                Best <span className='font-bold'>Eats</span>
            </h2> 
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                 <p className='bg-black rounded-full text-white p-2'>Delivery</p>
                 <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* search */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 
        w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input type='text' placeholder='Search food' 
            className='bg-transparent p-2 focus:outline-none w-full'/>
        </div>
        {/* cart */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
           <BsFillCartFill size={20} className='mr-2'/>Cart 
        </button>

        {/* mobile menu */}
        {/* overlay */}
        { nav ?  <div className='bg-black/80 fixed w-full h-screen z-10 left-0 top-0'></div> : ''}
        {/* side drawer */}
        <div className={nav ? 'fixed left-0 top-0 w-[300px] h-screen bg-white z-10 duration-300':
         'fixed left-[-100%] top-0 w-[300px] h-screen bg-white z-10 duration-300'
         }>
            <AiOutlineClose 
             onClick={()=>setNav(!nav)}
             size={30}
             className='absolute top-4 right-4 cursor-pointer' />
            <h3 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h3>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'>
                        <TbTruckDelivery size={25} className='mr-4' />Orders
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdFavorite size={25} className='mr-4' />Favorites
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaWallet size={25} className='mr-4' />Wallet
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdHelp size={25} className='mr-4' />Help
                    </li>
                    <li className='text-xl py-4 flex'>
                        <AiFillTag size={25} className='mr-4' />Promotion
                    </li>
                    <li className='text-xl py-4 flex'>
                        <BsFillSaveFill size={25} className='mr-4' />Best Ones
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaUserFriends size={25} className='mr-4' />Invite Friends
                    </li>
                </ul>
            </nav>

        </div>


    </div>
  )
}
