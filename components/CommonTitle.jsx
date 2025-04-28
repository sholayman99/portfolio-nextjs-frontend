import {motion} from "framer-motion"

const CommonTitle = () => {
    return (
        <motion.div className={"flex flex-col gap-y-3"}  initial={{x: -200}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}>
            <div className={`flex items-center gap-x-3 title-text`}
                       >
                <div className="flex items-center gap-1">
                    <div className="w-0.5 h-6 rounded bg-[#76E4F7] shadow-[0_0_8px_#76E4F7]"></div>
                    <div className="w-0.5 h-6 rounded bg-[#76E4F7] shadow-[0_0_8px_#76E4F7]"></div>
                </div>

                <h2 className={"text-4xl font-serif"}>ABOUT ME</h2>

            </div>
            <p className={"text-base text-accent"}>Here you will
                find more information about me, what I do, and my current skills mostly in terms of
                programming and technology</p>
        </motion.div>
    );
};

export default CommonTitle;