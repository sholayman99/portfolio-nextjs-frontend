import { FiDownload } from "react-icons/fi";

const CommonButton = ({
                          text = "Get Resume",
                          icon: Icon = FiDownload,
                          size = "lg",
                          className = "",
                      }) => {
    const sizeStyles = {
        sm: "h-9 px-5 text-sm",
        md: "h-11 px-8 text-base",
        lg: "h-14 px-12 text-lg",
    };

    return (
        <button
            className={`
        relative group overflow-hidden
        flex items-center justify-center gap-x-2
        rounded-full border-[0.1px]
        text-[#76E4F7] bg-transparent border-[#76E4F7]/60
        transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
         hover:bg-primary-hover hover:border-white
        hover:shadow-[0_0_15px_2px_rgba(118,228,247,0.4)]
        active:scale-95
        ${sizeStyles[size]}
        ${className}
      `}
        >
            {/* Animated text and icon */}
            <div className="relative flex items-center gap-x-2">
                {/* Text */}
                <p className="transition-transform duration-300 group-hover:translate-x-1">
                    {text}
                </p>

                {/* Icon */}
                <Icon
                    className="transition-transform duration-500 translate-x-24 group-hover:translate-x-0 text-sm"
                    size={20}
                />

                {/* Bottom underline */}
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </div>
        </button>
    );
};

export default CommonButton;
