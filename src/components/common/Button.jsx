import { FiArrowRight } from "react-icons/fi";

const Button = ({
    children,
    variant = "solid", // solid | outline
    arrow = false,
    href = "#",
    className = "",
    ...props
}) => {
    const base =
        "inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 whitespace-nowrap";

    const styles = {
        solid: "bg-gold text-white hover:bg-gold-dark",
        outline:
            "border border-gold text-gold hover:bg-gold hover:text-white bg-transparent",
    };

    return (
        <a href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
            {children}
            {arrow && <FiArrowRight className="text-base" />}
        </a>
    );
};

export default Button;