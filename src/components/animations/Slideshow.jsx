import React,{useEffect,useState} from "react";

const SlideText=(props)=>{
    const [showtext, setShowtext]=useState(false);
    useEffect(()=>{
            setShowtext(true)
        },[]  
    )
    return(
        <div className="h-screen items-center justify-center grid-cols-2 mx-6">
            <p className={`text-2xl text-white font-light transform ${
                showtext? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-1000`}>
                {props.message}
            </p>
        </div>
    )

}
export default SlideText;
