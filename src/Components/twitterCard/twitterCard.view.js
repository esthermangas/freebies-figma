import React from 'react';
import styles from './twitterCard.module.css';
import starIcon from '../../assets/PartThree/starIcon.png';

const TwitterCard = (props) => {
    const {twitterUser} = props;

    return (
        <div className={styles.root}>
            <div className={styles.head}>
                <span className={styles.profileSimulation}>
                    <img src={twitterUser.profilePhoto}/>
                </span>
                <div className={styles.infoUser}>
                    <div className={styles.nameUser}>
                        {twitterUser.name}
                    </div>
                    <div className={styles.locationUser}>
                        {twitterUser.location}
                    </div>
                </div>
                <div className={styles.punctuation}>
                    <div className={styles.points}>
                        {twitterUser.punctuation}
                    </div>
                    <img src={starIcon}/>
                </div>
            </div>
            <div className={styles.comment}>
                {twitterUser.comment}
            </div>
        </div>
    );
};


export default TwitterCard;
