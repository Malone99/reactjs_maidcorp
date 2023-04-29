import React, {useState} from "react";
import CleaningImg from "../images/cleaning.jpg"
import CleaningImg2 from "../images/cleaning2.jpg"
import Typed from "react-typed";



const ContentGrid=()=>{
    const [hover, setHover]=useState(false)

    const datasource=[CleaningImg,CleaningImg2]

    const handleChange=()=>{
        
            setHover(true);
            console.log(hover);
        
    }

    return(
        <section>
            <div className="bg-white w-full py-32 px-4">
              <div  className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img onMouseMoveCapture={()=> handleChange()} 
                className=" w-[500px] h-[400px shadow-2xl]
                 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg
                 hover:shadow-black/30" 
                src={hover? CleaningImg:CleaningImg2} 
                alt="/"/>
               <div className="  text-justify  flex flex-col justify-center" >
                <Typed className="pb-4 font-bold text-2xl" 
                    strings={["Our Sevices", "What We Offer"]} 
                    loop typeSpeed={70} 
                    backDelay={1000} 
                    backSpeed={50} >    
                </Typed>
                <p className="pb-[18px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Esse at enim nobis amet distinctio sapiente ratione id a quas,
                     ex iste officia nesciunt, in, saepe officiis. Nam atque recusandae
                      mollitia!
                </p>
                <button className=" inline-block rounded bg-[#ce8fc3] w-[150px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal
                                     text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out
                                      hover:bg-gray-400    hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                      focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                      focus:outline-none focus:ring-0 active:bg-[primary-700 ]active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                      dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
                                      ,0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_
                                      rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,
                                      0.1)] ">See More</button>
               </div>
              </div>
            </div>
        </section>
    )
}

export default ContentGrid