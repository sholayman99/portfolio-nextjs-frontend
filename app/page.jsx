"use client";

import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import useScrollToHash from "@/app/hooks/useScrollToHash";
import Work from "@/components/Work";



const Home = () => {
    useScrollToHash();
    return (
        <>
            <section className={"container mx-auto"}>
               <Hero />
               <AboutMe/>
                <Work />
            </section>
        </>
    );
};

export default Home;