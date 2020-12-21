import React from 'react';
import styles from './textImage.module.css';
import boyImg from '../../../assets/PartTwo/boyImg.png';
import checkIcon from '../../../assets/PartTwo/checkIcon.png';

const TextImage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={boyImg} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    We Provide Many Features You Can Use
                </div>
                <div className={styles.text}>
                    You can explore the features that we provide with fun and have their own functions each feature.
                </div>
                <div className={styles.subTextContainer}>
                    <div className={styles.cont}>
                        <span>
                            <img src={checkIcon} />
                         </span>
                        <div className={styles.subText}>
                            Powerfull online protection.
                        </div>
                    </div>
                    <div className={styles.cont}>
                        <span>
                            <img src={checkIcon}/>
                        </span>
                        <div className={styles.subText}>
                            Supercharged VPN
                        </div>
                    </div>
                    <div className={styles.cont}>
                        <span className={styles.span}>
                             <img src={checkIcon} />
                        </span>
                        <div className={styles.subText}>
                            No specific time limits.
                        </div>
                    </div>
                    <div className={styles.cont}>
                        <span>
                             <img src={checkIcon}/>
                        </span>
                        <div className={styles.subText}>
                            Powerfull online protection.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextImage;
