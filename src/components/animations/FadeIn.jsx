import React,{useState, useEffect} from "react";
const FadeIn=(props)=>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    return (
      <h1
        className={`text-2xl font-light text-gray-800 ${
          isVisible ? 'fade-in' : 'invisible'
        }`}
      >
       {props.message}
      </h1>
    );
  };

export default FadeIn;