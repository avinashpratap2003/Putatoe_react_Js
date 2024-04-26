import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { RiFileList3Fill } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";

const Footer = () => {
  return (
    <div className='grid grid-cols-5 my-4 bg-white'>
      <button className='flex flex-col text-center items-center text-4xl  justify-center'>
        <div className='  text-[#419da4f3]'><IoMdHome/></div>
        <div className=' text-[#419da4f3] hidden md:block'>Home</div>
      </button>
      <button className='flex flex-col text-center items-center text-4xl  justify-center'>
        <div className='  text-[#419da4f3]'><IoPeople/></div>
        <div className=' text-[#419da4f3] hidden md:block'>Profile</div>
      </button>
       <button className='flex flex-col text-center items-center text-4xl'>
        <img className='h-12 md:h-32' src="./putato_image.png" alt="Articles" />
       </button>
      <button className='flex flex-col text-center items-center text-4xl  justify-center'>
        <div className='  text-[#419da4f3]'><RiFileList3Fill/></div>
        <div className=' text-[#419da4f3] hidden md:block'>Follow List</div>
      </button>
      <button className='flex flex-col text-center items-center text-4xl  justify-center'>
        <div className='  text-[#419da4f3]'><IoIosChatbubbles/></div>
        <div className=' text-[#419da4f3] hidden md:block'>Chats</div>
      </button>
    </div>
  )
}

export default Footer;
 