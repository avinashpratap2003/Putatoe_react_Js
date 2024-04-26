// import './Navbar.css'
import { FaLocationDot } from "react-icons/fa6";
import SearchBar from "./Searchbar";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-[#419da4] pb-2'>
      <nav className=" navbar flex justify-between items-center md:px-[3rem] py-4 px-2 md:px-0 gap-3 text-white text-xl max-w-[1600px] mx-auto">
        <img className="hidden md:block w-20" src="./putato_image.png" alt="Putato logo" />
        <div className='flex items-center gap-1 w-full md:w-fit'>
            <div className="location-icon"><FaLocationDot/></div>
            <input 
                placeholder='location'
                defaultValue="Gorakhpur, Uttar Pradesh" 
                className='p-2 w-full text bg-[#419da4f3] border-2 rounded-lg outline-none text-sm'/>
        </div>
        <div className="hidden md:block w-full">
        <div className='flex items-center gap-2 w-full'>
            <div className="border-2 w-full border-white bg-white rounded-md flex items-center">
                <button className=' bg-white text-[#419da4f3] text-2xl pl-3'><FaSearch/></button>
                <input className='m-1 w-full outline-none text-black ml-3 items-center' 
                        placeholder='Search for products...' 
                        type="text" />
            </div>
            <button className=' text-2xl'><FaMicrophone/></button>
        </div>
        </div>
        <button className=" flex gap-5 justify-end md:text-[2rem] mr-5">
            <FaBell/>
            <FaShoppingCart/>
        </button>
      </nav>
      <div className="block md:hidden mx-3">
        <div className='flex items-center gap-2 w-full'>
            <div className="border-2 w-full border-white bg-white rounded-md flex items-center">
                <button className=' bg-white text-[#419da4f3] text-2xl pl-3'><FaSearch/></button>
                <input className='m-1 w-full outline-none text-black ml-3 items-center' 
                        placeholder='Search for products...' 
                        type="text" />
            </div>
            <button className=' text-2xl text-white'><FaMicrophone/></button>
        </div>
        </div>
    </div>
  )
}

export default Navbar
