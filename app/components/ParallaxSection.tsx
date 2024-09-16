import React from "react";
import styles from "../styles/ParallaxSection.module.css";

interface ParallaxSectionProps {
    backgroundImage: string;
    children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    backgroundImage,
    children,
}) => {
    return (
        <div
            className={styles.parallax}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default ParallaxSection;
