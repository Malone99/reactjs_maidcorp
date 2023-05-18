import React from "react";
import CleaningImg from "../images/cleaning.jpg"
import {FcGoogle} from "react-icons/fc"

const Login=(props)=>{


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg-white">
                <img className="w-full h-full object-cover" src={CleaningImg} alt="" />
            </div>
            <div className="bg-gray-100 flex flex-col justify-center ">
                
                <div  className="flex justify-center mb-8  ">
                    <button className=" border-r-1 shadow-xl bg-[#ce8fc3] 
                                    rounded-md text-xl  w-[400px] h-[35px] m-2
                                    hover:hover:bg-[#f06cda] hover:shadow-2xl" ><FcGoogle/></button>
                </div>
                <form className=" max-w-[400px] mx-auto w-full bg-white p-4 shadow-lg" action="">
                    <h1 className="text-center text-2xl font-bold p-2 mb-3">Login</h1>
                    <div className="flex flex-col p-4">
                        <label  className=" font-semibold">Username</label>
                        <input className=" rounded border py-2" type="text" />
                    </div>
                    <div className="flex flex-col p-4">
                        <label  className=" font-semibold ">Password</label>
                        <input className=" rounded border py-2" type="password" />
                    </div>
                        <button className="  border-r-1 shadow-xl bg-[#ce8fc3]
                                         rounded-md text-xl  w-full h-[35px] m-2
                                         hover:bg-[#f06cda]" >Login
                        </button>
                    <div>
                        <a className="text-blue-600 ml-2 ">Forgot password ?</a>
                    </div>

                </form>
            </div>

        </div>
    )

}

export default Login