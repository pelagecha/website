import React from "react";
import styles from "../styles/JobExperienceSplash.module.css";

const JobExperienceSplash: React.FC = () => {
    return (
        <div className={styles.splash}>
            <h1>My Professional Journey</h1>
            <p>Explore my career path and key experiences</p>
            <div className={styles.backgroundImage}></div>
        </div>
    );
};

export default JobExperienceSplash;
