import { motion } from "framer-motion";

const CommonTitle = ({ title, subtitle }) => {
    return (
        <motion.div
            className="flex flex-col gap-y-2"
            initial={{ x: -200 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileInView={{ x: 0 }}
        >
            <div className="flex items-center gap-x-4 font-mono">
                <div className="flex items-center gap-1">
                    <div className="w-0.5 h-6 rounded bg-[#80DB66] shadow-[0_0_8px_#64cb47]" />
                    <div className="w-0.5 h-6 rounded bg-[#80DB66] shadow-[0_0_8px_#64cb47]" />
                </div>
                <h2 className="text-4xl  title-text tracking-tight leading-tight text-white">
                    {title}
                </h2>
            </div>
            {/*<p className="text-lg  text-accent tracking-normal leading-relaxed">*/}
            {/*    {subtitle}*/}
            {/*</p>*/}
        </motion.div>
    );
};

export default CommonTitle;
