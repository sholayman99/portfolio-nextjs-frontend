import { FiDownload } from "react-icons/fi";

const CommonButton = ({
                          text = "Get Resume",
                          icon: Icon = FiDownload,
                          size = "lg",
                          className = "",
                      }) => {
    const sizeStyles = {
        sm: "px-5 py-1.5 text-sm",
        md: "px-8 py-2.5 text-base",
        lg: "py-4 px-[60px] text-lg",
    };

    return (
        <button
            className={`relative group overflow-hidden flex items-center justify-center gap-x-2 rounded-full border-[1px] text-accent 
            transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-primary-hover font-[600] border-accent
            hover:border-white hover:text-white  active:scale-95 ${sizeStyles[size]} ${className} `}
        >
            <div className="relative flex items-center gap-x-2">
                <p className="transition-transform duration-300 group-hover:translate-x-1">
                    {text}
                </p>
                <Icon
                    className="transition-transform duration-500 text-md"
                />
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-white transition-all  duration-500 group-hover:w-full" />
            </div>
        </button>
    );
};

export default CommonButton;