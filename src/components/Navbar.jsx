import React,{useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar=()=>{

    const [nav,setNave]=useState(true);

    const handleNav=()=>{
        setNave(!nav);
    }

    return(
        <div className=' flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#ce8fc3]'>MaidCorp</h1>
            <ul className={nav?"flex ease-in-out duration-500 " :" fixed left-[-100%]"}>
                <li className='p-3'>Home</li>
                <li className='p-3'>Services</li>
                <li className='p-3 hover:text-pink-400'><Link to={'/login'}>About</Link></li>
                <li className='p-3' >Contact </li>
            </ul>
            <div onClick={handleNav}>
                {!nav?<AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[30%] h-full border-r bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]' }>
            <h1 className='w-full text-3xl font-bold text-[#ce8fc3] m-4'>MaidCorp</h1>
                <nav className=" uppercase p-3">
                    <li className='p-3 border-b border-gray-600'>Home</li>
                    <li className='p-3 border-b border-gray-600'>Servsices</li>
                    <li className='p-3 border-b border-gray-600'><Link to={'/login'}>About</Link></li>
                    <li className='p-3' onClick={<Login/>} >Contact </li>
                </nav>
            </div>
        </div>
    )   
}

export default Navbar;