import React from 'react';
import styles from './navBar.module.css';
import Button from '../../../Components/Button/index';
import logo from '../../../assets/logo.png';

const NavBar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.menuIcon}>
                    <img src={logo} />
                </div>
                <div className={styles.buttonsActionsContainer}>
                    <Button label="About"/>
                    <Button label="Features"/>
                    <Button label="Pricing"/>
                    <Button label="Testimonials"/>
                    <Button label="Help"/>
                </div>
                <div className={styles.buttonsUserContainer}>
                    <Button label="Sign In" bold/>
                    <Button label="Sign Up" variant="red" bold />
                </div>
            </div>
        </div>
    )
};

export default NavBar;
