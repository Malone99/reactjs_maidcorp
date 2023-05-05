import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import ContentGrid from "./ContentGrid";
import Newsletter from "./Newsletter";
import Profile from "./Profile";
import Footer from "./Footer";

const Home=()=>{


    return(
        <div className="bg-[#000300]">
            <Navbar/>
            <Content/>
            <ContentGrid/>
            <Newsletter/>
            <Profile/>
            <Footer/>
        </div>
    )

}
export default Home;