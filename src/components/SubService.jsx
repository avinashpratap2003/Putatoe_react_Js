import React from "react";

const SubService = () => {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <div className=" w-[98%] mx-auto h-10 bg-grey bg-[#419da4f3] mt-4 py-2 pl-3 text-white font-semibold text-2xl
       content-center">All SubServices</div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[98%] mx-auto ">

        <div className=" relative bg-white mt-3 rounded-lg pt-5 ">
          <div className=" absolute z-10 bg-green-700 right-1 top-1 text-2xl font-semibold text-white px-5">20% Off</div>
          <h1 className=" absolute z-10 text-3xl text-white font-bold bottom-3  ml-5 ">Grocery</h1>
          <img className=" h-full" src="./product_images/groceries.jpg" alt="" />
        </div>
        <div className=" relative bg-white mt-3 rounded-lg pt-5 ">
          <div className=" absolute z-10 bg-green-700 right-1 top-1 text-2xl font-semibold text-white px-5">20% Off</div>
          <h1 className=" absolute z-10 text-3xl text-white font-bold bottom-3  ml-5 ">Beverages</h1>
          <img className=" h-full" src="./beverages.webp" alt="" />
        </div>
        <div className=" relative bg-white mt-3 rounded-lg pt-5 k">
          <div className=" absolute z-10 bg-green-700 right-1 top-1 text-2xl font-semibold text-white px-5">20% Off</div>
          <h1 className=" absolute z-10 text-3xl text-white font-bold bottom-3  ml-5 ">Dairy Products</h1>
          <img className="h-full" src="./product_images/dairy-prod2.jpg" alt="" />
        </div>
        <div className=" relative bg-white mt-3 rounded-lg pt-5 ">
          <div className=" absolute z-10 bg-green-700 right-1 top-1 text-2xl font-semibold text-white px-5">20% Off</div>
          <h1 className=" absolute z-10 text-3xl text-white font-bold bottom-3  ml-5 ">Fruits</h1>
          <img className=" h-full" src="./fruits.avif" alt="" />
        </div>
        <div className=" relative bg-white mt-3 rounded-lg pt-5 ">
          <div className=" absolute z-10 bg-green-700 right-1 top-1 text-2xl font-semibold text-white px-5">20% Off</div>
          <h1 className=" absolute z-10 text-3xl text-white font-bold bottom-3 pl-5 ">Vegetables</h1>
          <img className=" h-full" src="./product_images/vegetables2.jpg" alt="" />
        </div>
       

       
      </div>
    </div>
  );
};

export default SubService;
