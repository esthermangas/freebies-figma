import React from 'react';
import styles from './partTwo.module.css';
import TextImage from "./textImage";
import Plans from "./plans";
import MapLogos from "./mapMundi";

const PartTwo = () => {
    return (
        <div className={styles.root}>
            <TextImage/>
            <Plans/>
            <MapLogos/>
        </div>
    );
};

export default PartTwo;
