import React from 'react';
import styles from './partOne.module.css';
import NavBar from './navBar';
import TextImage from './textImage';

const PartOne = () => {
    return (
        <div className={styles.root}>
            <NavBar/>
            <TextImage/>
        </div>
    );
};

export default PartOne;

