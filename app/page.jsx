"use client";

import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";


const Home = () => {
    return (
        <>
            <section className={"min-h-screen"}>
               <Intro />
                <AboutMe/>
            </section>
        </>
    );
};

export default Home;