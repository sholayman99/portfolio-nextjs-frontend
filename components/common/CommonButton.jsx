import { FiDownload } from "react-icons/fi";

const CommonButton = ({
                          text = "Get Resume",
                          icon: Icon = FiDownload,
                          size = "lg",
                          className = "",
                      }) => {
    const sizeStyles = {
        sm: "px-6 py-1.5 text-sm tracking-wider",
        md: "px-8 py-2 text-base",
        lg: "py-3 px-[50px] text-lg",
    };

    return (
        <button
            className={`relative group overflow-hidden flex items-center justify-center gap-x-2 rounded-[5px] border-[1px] text-white 
            transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-primary font-[500] hover:font-[600] border-primary
            hover:border-primary hover:text-background  active:scale-95 ${sizeStyles[size]} ${className} uppercase `}
        >
            <div className="relative flex items-center gap-x-2">
                <p className="transition-transform duration-300 group-hover:translate-x-1">
                    {text}
                </p>
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-background transition-all  duration-500 group-hover:w-full" />
            </div>
        </button>
    );
};

export default CommonButton;