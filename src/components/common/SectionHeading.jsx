const SectionHeading = ({
    label,
    title,
    highlight,
    suffix,
    desc,
    light = false, // true => dark background (white text)
    align = "center", // center | left
    lines = true,
    breakLine = false, // true => highlight neeche nayi line me aayega
}) => {
    const alignCls =
        align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <div className={`flex flex-col ${alignCls}`}>
            {label && (
                <div className="flex items-center gap-3 mb-3">
                    {lines && <span className="h-px w-8 sm:w-12 bg-gold" />}
                    <span className="text-[10px] sm:text-xs tracking-[0.25em] font-medium text-gold uppercase">
                        {label}
                    </span>
                    {lines && align === "center" && (
                        <span className="h-px w-8 sm:w-12 bg-gold" />
                    )}
                </div>
            )}

            <h2
                className={`font-heading font-medium leading-tight text-3xl sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-dark"
                    }`}
            >
                {title}
                {highlight && (
                    <>
                        {breakLine ? <br /> : " "}
                        <span className="text-gold">{highlight}</span>
                    </>
                )}
                {suffix && <> {suffix}</>}
            </h2>

            {desc && (
                <p
                    className={`mt-3 sm:mt-3.5 max-w-2xl text-xs sm:text-sm leading-relaxed ${light ? "text-gray-300" : "text-gray-500"
                        }`}
                >
                    {desc}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;