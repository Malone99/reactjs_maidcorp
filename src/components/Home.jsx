import React from "react";
import Content from "./Content";
import ContentGrid from "./ContentGrid";
import Newsletter from "./Newsletter";
import Profile from "./Profile";


const Home = () => {
    return (<>
        <div className="bg-[#000300]">

            <Content/>
            <ContentGrid/>
            <Newsletter/>
            <Profile/>

        </div>
    </>)
}


export default Home;
