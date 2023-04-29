import React,{useState} from "react";
import Typed from 'react-typed';

const Content=(props)=>{
    return (
        <div className="text-white">
            <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className=" font-thin p-2 text-2xl ">Clean and perfection is our moto</p>
            <h1 className="text-[#ce8fc3] font-bold md:text-3xl sm:text-6xl">Get the best Services and make you house a Home</h1>
            <Typed className="text-2xl font-extralight pb-9" 
                strings={["see our maids", "view their profile"]} 
                backDelay={1000} typeSpeed={70} 
                backSpeed={50} loop>
            </Typed>
            <div>
            <button className="border-r-4 shadow-xl bg-[#ce8fc3] rounded-md text-xl  w-[200px] h-[40px]">Browse</button>
            </div>
            </div>    
        </div>
    )
}

export default Content;