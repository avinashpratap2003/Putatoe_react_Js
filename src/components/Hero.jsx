import  './Hero.css';
import React from 'react';
import { ImMobile } from "react-icons/im";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// function SampleNextArrow(prop){
//     const {clasName, style, onClick}= props;
//     return(
//     <div style={{}} onClick={onClick}/>
//     )
// }
// function SamplePrevArrow(prop){
//     const {clasName, style, onClick}= props;
//     return(
//     <div style={{}} onClick={onClick}/>
//     )
// }
const Hero = (props) => { 
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplayspeed: 50,
        speed:100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return (
    <div className=' max-w-[1600px] mx-auto pb-7'>
        <div className=' mx-auto mt-2 w-[98%] bg-white rounded-lg'>
        <Slider {...settings}>    
                <div>
                <img className='md:w-[99%] md:h-[30rem] m-auto py-1 ' src="./product_images/dairyProd4.jpg" alt="" />
                </div>
                <div>
                <img className='md:w-[99%] md:h-[30rem] m-auto py-1 ' src="./product_images/vegetables3.jpg" alt="" />
                </div>
                <div>
                <img className='md:w-[99%] md:h-[30rem] m-auto py-1 ' src="./product_images/grocery2.jpg" alt="" />
                </div>
        </Slider>
          
        </div>
       
            <div className='flex  items-center justify-center mt-[3rem] bg-white w-[98%] m-auto rounded-lg py-7 shadow-[#419da4f3] shadow-md '>
              <div className='w-8/12 md:w-11/12 grid grid-cols-2 gap-6 md:grid-cols-4'>
                <button className='heroCard'>
                <div className='heroIcons'><ImMobile/></div>
                <div className='iconText'>Mobile Recharge</div>
                </button>
                <button className='heroCard'>
                <div className='heroIcons'><FaRegNewspaper/>
                </div> <div className='iconText'>News</div>
                </button>
                <button className='heroCard'>
                <div className='heroIcons'><FaPeopleGroup/></div>
                <div className='iconText'>Jobs</div>
                </button>
                <button className='heroCard'>
                <div className='heroIcons'><FaLightbulb/></div>
                <div className='iconText'>Electricity Bill</div>
                </button>
                </div>
        </div>
      
    </div>
  )
}

export default Hero;
