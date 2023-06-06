import React from "react";
import AboutBG from "../images/about-bg.jpg"
import Typed from 'react-typed';
import SlideText from "./animations/Slideshow";
import FadeIn from "./animations/FadeIn";

const About =()=>{
    const msg="Welcome to MaidCorp -"+
                " Your Trusted Cleaning Partner"+
                +"At MaidCorp, we understand the importance of a clean and organized living space. We are a dedicated team of"
                +" experienced professionals providing top-notch cleaning services tailored to meet your specific needs. Whether you require a regular clean to maintain cleanliness, a thorough spring clean to freshen up your home,"
                +"or a comprehensive full clean for a deep and detailed transformation, we have you covered";

    const msg2=""
    return(
        <div>
             <div
                className="bg-center bg-cover h-screen relative"
                style={{ backgroundImage: `url(${AboutBG})` }}
                        >
                {/* Text content */}
                <div className="flex justify-center items-center py-20">
                    
                    <Typed className="text-4xl text-white font-bold " 
                            strings={["About Us", "What we are about"]} 
                            backDelay={1000} typeSpeed={70} 
                            backSpeed={50} loop>
                        </Typed>
                </div>
                <SlideText message={msg}/>
            </div>
                <div>
                    <div className="flex pt-10">
                        <div className="flex-shrink-0">
                        <iframe  
                src="https://giphy.com/embed/yaff4iMtl189a" 
                width="380" height="204" frameBorder="0" className="giphy-embed pointer-events-none pl-0" ></iframe>
           
                            
                        </div>
                        <div className="ml-4 text-bla">
                            <h1 className="text-2xl font-bold text-pink-500">Regular Clean</h1>
                            <p className="text-gray-800"></p>
                            <FadeIn message={msg}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default About