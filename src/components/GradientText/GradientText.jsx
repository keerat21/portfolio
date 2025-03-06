import "./GradientText.scss";

export default function GradientText({
    children,
    className = "",
    colors = ["#494992", "#000000", "#826e91", "#4B0082", "#826e91"], // Default colors
    animationSpeed = 15, // Default animation speed in seconds
    showBorder = true, // Default overlay visibility
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div className={`animated-gradient-text ${className}`}>
            {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
            <div className="text-content" style={gradientStyle}>{children}</div>
        </div>
    );
}
