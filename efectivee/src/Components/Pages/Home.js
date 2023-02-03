import React from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";

function Home () {
    return(
        <div className="Home">
            <HeroSection />
            <Cards />
        </div>
    );
}

export default Home;