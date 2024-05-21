import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { RiFileList3Fill } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";

const Footer = () => {
  return (
    <div className='grid grid-cols-5 my-4 bg-white'>
      <div className='flex flex-col text-center items-center text-4xl  justify-center'>
        <div className='  text-[#419da4f3]  cursor-pointer hover:text-slate-500'><IoMdHome/></div>
        <div className=' text-[#419da4f3] hidden md:block  cursor-pointer hover:text-slate-500'>Home</div>
      </div>
      <div className='flex flex-col text-center items-center text-4xl  justify-center'>
        <div className='  text-[#419da4f3]  cursor-pointer hover:text-slate-500'><IoPeople/></div>
        <div className=' text-[#419da4f3] hidden md:block  cursor-pointer hover:text-slate-500'>Profile</div>
      </div>
       <div className='flex flex-col text-center items-center text-4xl'>
        <img className='h-12 md:h-32  cursor-pointer hover:text-slate-500' src="./putato_image.png" alt="Articles" />
       </div>
      <div className='flex flex-col text-center items-center text-4xl  justify-center'>
        <div className='  text-[#419da4f3]  cursor-pointer hover:text-slate-500'><RiFileList3Fill/></div>
        <div className=' text-[#419da4f3] hidden md:block  cursor-pointer hover:text-slate-500'>Follow List</div>
      </div>
      <div className='flex flex-col text-center items-center text-4xl  justify-center'>
        <div className='  text-[#419da4f3]  cursor-pointer hover:text-slate-500'><IoIosChatbubbles/></div>
        <div className=' text-[#419da4f3] hidden md:block  cursor-pointer hover:text-slate-500'>Chats</div>
      </div>
    </div>
  )
}

export default Footer;
 