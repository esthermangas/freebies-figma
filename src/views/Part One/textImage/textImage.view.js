import React from 'react';
import styles from './textImage.module.css';
import Button from '../../../Components/Button';
import imgGirl from '../../../assets/imgGirl.png';
import iconLocation from '../../../assets/iconLocation.png';
import iconServer from '../../../assets/iconServer.png';
import iconUser from '../../../assets/iconUser.png';

const TextImage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        Want anything to be easy with <b>LaslesVPN.</b>
                    </div>
                    <div className={styles.subText}>
                        Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.
                    </div>
                    <div>
                        <Button label="Get Started" variant="special" />
                    </div>
                </div>
                <div className={styles.imgGirl}>
                    <img src={imgGirl} className={styles.img}/>
                </div>
            </div>
            <div className={styles.infoContainer}>
               <div className={styles.cont}>
                   <img src={iconUser}/>
                   <div className={styles.iconText}>
                       <b>90 +</b>
                       Users
                   </div>
               </div>
                <span className={styles.spanVector} />
               <div className={styles.cont}>
                   <img src={iconLocation}/>
                   <div className={styles.iconText}>
                       <b>30 +</b>
                       Locations
                   </div>
               </div>
                <span className={styles.spanVector} />
               <div className={styles.cont}>
                <img src={iconServer}/>
                <div className={styles.iconText}>
                    <b>50 +</b>
                    Servers
                </div>
               </div>
            </div>
        </div>
    );
};

export default TextImage;
