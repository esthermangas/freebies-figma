import React from 'react';
import styles from './twitter.module.css';
import {twitterUsers} from '../../../Components/db';
import TwitterCard from '../../../Components/twitterCard';
import logo from '../../../assets/logo.png';
import fb from '../../../assets/PartThree/fb.png';
import twitter from '../../../assets/PartThree/twitter.png';
import instagram from '../../../assets/PartThree/instagram.png'
import Button from '../../../Components/Button';

const Twitter = () => {
    const productColumn = ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'];
    const engageColumn = ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'];
    const earnMoneyColumn = ['Affiliate', 'Become Partner'];

    return (
        <div className={styles.root}>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    Trusted by Thousands of Happy Customer
                </div>
                <div className={styles.subText}>
                    These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
                </div>
            </div>
            <div className={styles.twitterCardsContainer}>
                {twitterUsers.map(user => (
                    <TwitterCard twitterUser={user}/>
                ))}
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.buttonsCont}>
                    <button className={styles.button}>
                            <svg width="30" height="31" viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.75 14.0029H8.925L13.4625 8.55291C13.6747 8.29764 13.7768 7.96854 13.7463 7.638C13.7158 7.30747 13.5553 7.00258 13.3 6.79041C13.0447 6.57823 12.7156 6.47616 12.3851 6.50663C12.0546 6.53711 11.7497 6.69764 11.5375 6.95291L5.2875 14.4529C5.24545 14.5126 5.20785 14.5752 5.175 14.6404C5.175 14.7029 5.175 14.7404 5.0875 14.8029C5.03084 14.9462 5.00118 15.0988 5 15.2529C5.00118 15.407 5.03084 15.5596 5.0875 15.7029C5.0875 15.7654 5.0875 15.8029 5.175 15.8654C5.20785 15.9306 5.24545 15.9933 5.2875 16.0529L11.5375 23.5529C11.655 23.694 11.8022 23.8075 11.9686 23.8853C12.1349 23.963 12.3164 24.0032 12.5 24.0029C12.7921 24.0035 13.0751 23.9018 13.3 23.7154C13.4266 23.6105 13.5312 23.4816 13.6079 23.3362C13.6846 23.1907 13.7318 23.0316 13.7469 22.8679C13.762 22.7042 13.7447 22.5391 13.6959 22.3821C13.6471 22.2251 13.5678 22.0792 13.4625 21.9529L8.925 16.5029H23.75C24.0815 16.5029 24.3995 16.3712 24.6339 16.1368C24.8683 15.9024 25 15.5844 25 15.2529C25 14.9214 24.8683 14.6034 24.6339 14.369C24.3995 14.1346 24.0815 14.0029 23.75 14.0029Z"/>
                            </svg>
                    </button>
                    <button className={styles.button}>

                            <svg width="30" height="31" viewBox="0 0 30 31"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.25 14.0029H21.075L16.5375 8.55291C16.3253 8.29764 16.2232 7.96854 16.2537 7.638C16.2842 7.30747 16.4447 7.00258 16.7 6.79041C16.9553 6.57823 17.2844 6.47616 17.6149 6.50663C17.9454 6.53711 18.2503 6.69764 18.4625 6.95291L24.7125 14.4529C24.7545 14.5126 24.7922 14.5752 24.825 14.6404C24.825 14.7029 24.825 14.7404 24.9125 14.8029C24.9692 14.9462 24.9988 15.0988 25 15.2529C24.9988 15.407 24.9692 15.5596 24.9125 15.7029C24.9125 15.7654 24.9125 15.8029 24.825 15.8654C24.7922 15.9306 24.7545 15.9933 24.7125 16.0529L18.4625 23.5529C18.345 23.694 18.1978 23.8075 18.0314 23.8853C17.8651 23.963 17.6836 24.0032 17.5 24.0029C17.2079 24.0035 16.9249 23.9018 16.7 23.7154C16.5734 23.6105 16.4688 23.4816 16.3921 23.3362C16.3154 23.1907 16.2682 23.0316 16.2531 22.8679C16.238 22.7042 16.2553 22.5391 16.3041 22.3821C16.3529 22.2251 16.4322 22.0792 16.5375 21.9529L21.075 16.5029H6.25C5.91848 16.5029 5.60054 16.3712 5.36612 16.1368C5.13169 15.9024 5 15.5844 5 15.2529C5 14.9214 5.13169 14.6034 5.36612 14.369C5.60054 14.1346 5.91848 14.0029 6.25 14.0029Z"/>
                            </svg>
                    </button>
                </div>
            </div>
            <div>
                <div className={styles.subscribe}>
                    <div className={styles.subscribeCont}>
                        <div className={styles.subscribeTextCont}>
                            <div className={styles.subscribeTitle}>Subscribe Now for Get Special Features!</div>
                            <div className={styles.subscribeText}>Let's subscribe with us and find the fun.</div>
                        </div>
                        <div className={styles.subscribeButton}>
                            <Button variant="special" label="Subscribe Now"/>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.contLogos}>
                        <div className={styles.logo}>
                            <img src={logo}/>
                        </div>
                        <div className={styles.logoText}>
                            <b>LaslesVPN</b> is a private virtual network that has unique features and has high security.
                        </div>
                        <div className={styles.socialAppsLogos}>
                            <img src={fb}/>
                            <img src={twitter}/>
                            <img src={instagram}/>
                        </div>
                        <div className={styles.copyRight}>
                            ©2020LaslesVPN
                        </div>
                    </div>
                    <div className={styles.footerInfo}>

                        <div className={styles.column}>
                            <div className={styles.columnTitle}>Product</div>
                            {productColumn.map(sentence => (
                                <div className={styles.columnText}>{sentence}</div>
                            ))}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.columnTitle}>Engage</div>
                            {engageColumn.map(sentence => (
                                <div className={styles.columnText}>{sentence}</div>
                            ))}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.columnTitle}>Earn Money</div>
                            {earnMoneyColumn.map(sentence => (
                                <div className={styles.columnText}>{sentence}</div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Twitter;
