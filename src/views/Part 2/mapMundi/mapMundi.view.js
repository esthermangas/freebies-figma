import React from 'react';
import styles from './mapMundi.module.css';
import map from '../../../assets/PartTwo/mapaMundi.png';

const MapLogos = () => {
    return (
        <div className={styles.root}>
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    Huge Global Network of Fast VPN
                </div>
                <div className={styles.subTitle}>
                    See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.
                </div>
            </div>
            <div className={styles.mapContainer}>
                <img src={map}/>
            </div>
        </div>
    );
};

export default MapLogos;
