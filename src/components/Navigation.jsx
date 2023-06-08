import React from "react";
import NavLinks from "./NavLinks";
import GetStarted from "./Getstarted";
import {
    Typography
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navigation=()=>{

    return(
        <nav className="bg-white h-20">
            <div className="flex items-center justify-around ">
                <div className="z-50 flex">
                <Typography className="text-[#ce8fc3] " variant="h4" color="blue-gray">  
                    <Link to={'/'}>MaidCorp</Link>
                </Typography>
                    <img src="https://img.icons8.com/ios/50/null/housekeeper-female.png" 
                         alt="logo"
                         className="md:cursor-pointer h-9"/>
                </div>
                <ul className="md:flex hidden uppercase items-start gap-8 font-bold ">
                    <li className="py-7">
                        Home
                    </li>
                    <NavLinks/>
                </ul>
                
                {/* mobile nav */}
                <ul className="md:hidden absolute  w-full h-full bottom-0 pl-4">
                    <li >
                        Home
                    </li>
                    <NavLinks/>
                </ul>
                <div className="py-5 md:hidden ">
                    <GetStarted/>
                </div>
            </div>
        </nav>
    )

}
export default Navigation;