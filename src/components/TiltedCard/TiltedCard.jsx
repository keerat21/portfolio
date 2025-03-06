import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./TiltedCard.scss";

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

export default function TiltedCard({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    scaleOnHover = 1.1,
    rotateAmplitude = 8,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
    urlClick
}) {
    const ref = useRef(null);
    const x = useMotionValue();
    const y = useMotionValue();
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState(0);
    const [dimensions, setDimensions] = useState({
        width: 400,
        height: 300
    });

    useEffect(() => {
        function updateDimensions() {
            let newWidth;
            if (window.innerWidth < 876 && window.innerWidth > 680)
                newWidth = Math.min(window.innerWidth * 0.8, 300);
            else
                newWidth = Math.min(window.innerWidth * 0.8, 400);
            const newHeight = (newWidth / 4) * 3; // Maintain 4:3 aspect ratio
            setDimensions({ width: newWidth, height: newHeight });
        }

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.2);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    const handleClick = (url) => {
        window.location.href = url;
    };

    return (
        <figure
            ref={ref}
            className="tilted-card-figure"
            style={{
                height: dimensions.height,
                width: dimensions.width,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(urlClick)}
        >
            {showMobileWarning && (
                <div className="tilted-card-mobile-alert">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="tilted-card-inner"
                style={{
                    width: dimensions.width,
                    height: dimensions.height,
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="tilted-card-img"
                    style={{
                        width: dimensions.width,
                        height: dimensions.height,
                    }}
                />

                {displayOverlayContent && overlayContent && (
                    <motion.div className="tilted-card-overlay">
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="tilted-card-caption"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
