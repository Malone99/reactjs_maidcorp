import React, {useState} from "react";


const Newsletter = () => {

    const [subscribe, setSubscribe] = useState("Subscribe");

    return (<div className="bg-black  py-20 px-4">
        <div className=" max-w-[1240px] mx-auto grid-flow-row">
            <h1 className=" text-[#ce8fc3] text-5xl pb-5 ">MaidCorp Newsletter
            </h1>
            <h1 className="pb-10 text-2xl text-[#ffffff]">Stay up to date with our news letter</h1>
            <div>
                <input className=" pl-3 rounded-md w-[800px] h-[35px] mr-10 focus-within:before:first-letter: text-black
                                            " type="text"
                    width={40}
                    placeholder="example@gmail.com"/>
                <button className="inline-block rounded bg-[#ce8fc3] w-[150px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal
                                                             text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out
                                                              hover:bg-red-700    hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                                                              focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                                                              focus:outline-none focus:ring-0 active:bg-[primary-700 ]active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                                                              dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
                                                              ,0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_
                                                              rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,
                                                              0.1)]  "
                    onClick={
                        (e) => {
                            setSubscribe(e.target.value)
                        }
                    }
                    value={"Thank You!!"}> {subscribe}</button>
            </div>
        </div>
    </div>)
}
export default Newsletter;
