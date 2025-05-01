"use client";

import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";



const Home = () => {
    return (
        <>
            <section className={"container mx-auto"}>
               <Hero />
               <AboutMe/>
            </section>
        </>
    );
};

export default Home;