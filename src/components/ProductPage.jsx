import React from 'react'
import './ProductPage.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoShareSocial } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import {useMediaQuery} from 'react-responsive'


const ProductPage = () => {
    const isMobile = useMediaQuery({maxWidth:640});
    const isTablet = useMediaQuery({maxWidth:768});
    const islaptop = useMediaQuery({maxWidth:1024});

    const slider1 = React.useRef(null);
    const slider2 = React.useRef(null);
    const settings = {
        dots: false,
        infinite: false,
        autoplay:false,
        speed:100,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false
      };
    const settings1 = {
        dots: true,
        infinite: false,
        autoplay:false,
        speed:100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
    const settings2 = {
        dots: true,
        infinite: false,
        autoplay:false,
        speed:100,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false
      };
    const settings3 = {
        dots: false,
        infinite: false,
        autoplay:false,
        speed:100,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false
      };
    const settings0 = {
        dots: false,
        infinite: false,
        autoplay:false,
        speed:100,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false
      };
    const settings01 = {
        dots: true,
        infinite: false,
        autoplay:false,
        speed:100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
    const settings02 = {
        dots: true,
        infinite: false,
        autoplay:false,
        speed:100,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false
      };
    const settings03 = {
        dots: false,
        infinite: false,
        autoplay:false,
        speed:100,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false
      };
  return (
    
    <div className=' max-w-[1600px] mx-auto'>
        {/* Beverages section */}
        <div className=' w-[98%] mx-auto bg-white rounded-lg'>
        <h1 className='text-center bg-white text-[#419da4f3] md:text-4xl font-sans font-semibold
         pl-3 rounded-lg py-4 shadow-[#419da4f3] shadow-md'>Popular Products </h1>
        <div className=' flex justify-between items-center px-5 text-[#419da4f3] text-2xl pt-6
         font-bold '>
            <button className='text-sm md:text-xl'>Beverages</button>
            <button className='text-sm md:text-xl'>View ALL</button>
        </div>
        <div className='  mx-12 z-10 absolute '>
            
        </div>
        <div className=' relative flex flex-col justify-center mx-auto w-11/12'>
            <button className='hidden md:block absolute -left-8 z-10  text-5xl text-[#419da4]' onClick={()=>slider1?.current?.slickPrev()}><FaArrowCircleLeft/></button>
            <button className='hidden md:block absolute -right-20 z-10  mr-12 text-5xl text-[#419da4]' onClick={()=>slider1?.current?.slickNext()}><FaArrowCircleRight/></button>
            <Slider ref={slider1} {...(isMobile ? settings1 :isTablet ? settings2 : islaptop? settings3 : settings)} > 
            <div>
            <div className='flex flex-col border-2 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div>
                    <img className=' h-full mx-auto relative mt-3' src="./beverages_image/frooti.png" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>Frooti</div>
                    <div className=' text-2xl font-semibold '>Frooti</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Cold Drinks</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹37</div>
                       <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹40</div>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        <div className=' w-4 h-4 bg-yellow-300 rounded-[50%]' > </div>
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>1.0 litre</div>
                    </div>
                    
                </div>
            </div>  
            </div>
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div>
                    <img className=' h-full mx-auto relative mt-3' src="./beverages_image/sprite.png" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>Coco Cola</div>
                    <div className=' text-2xl font-semibold '>Sprite</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Cold Drinks</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹37</div>
                       <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹40</div>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        <div className=' w-4 h-4 bg-green-300 rounded-[50%]' > </div>
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>1.0 litre</div>
                    </div>
                    
                </div>
            </div> 
            </div>
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl  z-10'>6% Off</div>
                    <img className=' h-full mx-auto relative mt-3' src="./beverages_image/pepsi.png" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>Pepsi</div>
                    <div className=' text-2xl font-semibold '>Pepsi...</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Cold Drinks</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹47</div>
                       <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹50</div>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        {/* <div className=' w-4 h-4 bg-yellow-300 rounded-[50%]' > </div> */}
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>1.5 litre</div>
                    </div>
                    
                </div>
            </div> 
            </div>
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div>
                    <img className=' h-full mx-auto relative mt-3' src="./beverages_image/thumps2.jpg" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>Coco Cola</div>
                    <div className=' text-2xl font-semibold '>thumpsup...</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Cold Drinks</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹47</div>
                       <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹50</div>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        {/* <div className=' w-4 h-4 bg-yellow-300 rounded-[50%]' > </div> */}
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>1.5 litre</div>
                    </div>
                    
                </div>
            </div> 
            </div>
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div>
                    <img className=' h-full mx-auto relative mt-3' src="./beverages_image/mirinda-soft-drink.webp" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>Mirinda</div>
                    <div className=' text-2xl font-semibold max-w-[] '>Mirinda soft Drink</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Cold Drinks</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹94</div>
                       <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹100</div>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        <div className=' w-4 h-4 bg-orange-500 rounded-[50%]' > </div>
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>2.2 litre</div>
                    </div>
                    
                </div>
            </div> 
            </div> 
        </Slider>
        </div>
        </div>
        {/* dairy products section */}
        <div className=' w-[98%] mx-auto bg-white rounded-lg'>
        <div className=' flex justify-between items-center px-5 text-[#419da4f3] text-2xl pt-6
         font-bold '>
            <button>Fruits</button>
            <button>View ALL</button>
        </div>
        <div className='  mx-12 z-10 absolute '>
            
        </div>
        <div className='relative flex flex-col justify-center mx-auto w-11/12'>
            <button className='hidden md:block absolute -left-8 z-10  text-5xl text-[#419da4]' onClick={()=>slider2?.current?.slickPrev()}><FaArrowCircleLeft/></button>
            <button className='hidden md:block absolute -right-20 z-10 mr-12 text-5xl text-[#419da4]' onClick={()=>slider2?.current?.slickNext()}><FaArrowCircleRight/></button>
            <Slider ref={slider2} {...(isMobile ? settings01 :isTablet ? settings02 : islaptop? settings03 : settings0)} > 
            <div>
            <div className='flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>4% Off</div>
                    <img className=' h-full mx-auto relative mt-3' src="./fruits_image/mango2.jpeg" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>Mango</div>
                    <div className=' text-2xl font-semibold '>Mango...</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Mango</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹480</div>
                       <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹500</div>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        {/* <div className=' w-4 h-4 bg-yellow-300 rounded-[50%]' > </div> */}
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>5 kg</div>
                    </div>
                    
                </div>
            </div>  
            </div>
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    {/* <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div> */}
                    <img className=' h-full mx-auto relative mt-3' src="./fruits_image/pomegranate2.jpg" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>None</div>
                    <div className=' text-2xl font-semibold '>Anaar</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Pomegranate</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹650</div>
                       {/* <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹40</div> */}
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        {/* <div className=' w-4 h-4 bg-green-300 rounded-[50%]' > </div> */}
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>5 kg</div>
                    </div>
                    
                </div>
            </div> 
            </div>
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    {/* <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div> */}
                    <img className=' h-full mx-auto relative mt-3' src="./fruits_image/kiwi-fruit.avif" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>Natural</div>
                    <div className=' text-2xl font-semibold '>kiwi...</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>kiwi</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹240</div>
                       {/* <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹50</div> */}
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        {/* <div className=' w-4 h-4 bg-yellow-300 rounded-[50%]' > </div> */}
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>2 kg</div>
                    </div>
                    
                </div>
            </div> 
            </div>
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    {/* <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div> */}
                    <img className=' h-full mx-auto relative mt-3' src="./fruits_image/lychee3.avif" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>None</div>
                    <div className=' text-2xl font-semibold '>Lychee(Leechee)...</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Lychee</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹180</div>
                       {/* <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹50</div> */}
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        {/* <div className=' w-4 h-4 bg-yellow-300 rounded-[50%]' > </div> */}
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>2 kg</div>
                    </div>
                    
                </div>
            </div> 
            </div>
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    {/* <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div> */}
                    <img className=' h-full mx-auto relative mt-3' src="./fruits_image/coconut2.jpg" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>None</div>
                    <div className=' text-2xl font-semibold '>Coconut(Naariyal).</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Coconut</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹145</div>
                       {/* <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹100</div> */}
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        {/* <div className=' w-4 h-4 bg-orange-500 rounded-[50%]' > </div> */}
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>5 pieces</div>
                    </div>
                    
                </div>
            </div> 
            </div> 
            <div>
            <div className=' flex flex-col border-2 mb-20 rounded-2xl mt-6 ml-5 shadow-[#419da4f3] shadow-md'>
                <div className=' w-[90%] mt-1 h-[10rem] relative mx-auto'>
                    {/* <div className=' bg-green-600 w-20 h-6 text-center content-center text-lg font-semibold text-white
                     mt-2 absolute bg-cover rounded-tl-2xl rounded-br-2xl z-10'>6% Off</div> */}
                    <img className=' h-full mx-auto relative mt-3' src="./fruits_image/banana3.jpg" alt="" />
                    <div className=' absolute flex flex-col text-4xl right-0 top-3 gap-[7rem] '>
                        <button className=' relative text-[#419da4f3] '><IoShareSocial/></button>
                        <button className=' relative text-[#419da4f3]  '><FaPlusSquare/></button>
                    </div>
                </div>
                <div className=' w-[90%] flex flex-col relative mt-8 ml-3 hover:cursor-pointer mx-auto'>
                    <div className=' text-[#419da4f3] text-xl font-extrabold '>None</div>
                    <div className=' text-2xl font-semibold '>Ripe Banana(Pakka kela)</div>
                    <div className=' text-[#419da4f3] font-semibold -mt-1 '>Banana</div>
                    <div className=' flex gap-2'>
                       <div className=' font-bold text-3xl mt-2'>₹250</div>
                       {/* <div className=' content-end font-semibold text-sm line-through'>M.R.P: ₹100</div> */}
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' text-xl mt-3 font-semibold text-green-600 '>In Stock</div>
                        {/* <div className=' w-4 h-4 bg-orange-500 rounded-[50%]' > </div> */}
                    </div>
                    <div className=' flex justify-between mt-4 items-center mb-3'>
                        <div className=' text-2xl font-semibold'>Unit : 1</div>
                        <div className=' border-2 border-black w-[7rem] text-2xl text-center rounded-full'>50 pieces</div>
                    </div>
                    
                </div>
            </div> 
            </div> 
        </Slider>
        </div>
        </div>
        
      
    </div>
  )
}

export default ProductPage
