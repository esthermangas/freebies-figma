import React, {useState} from 'react';
import styles from './plans.module.css';
import {plans} from '../../../Components/db';
import Box from '../../../Components/Box';

const Plans = () => {
    const [select, setSelect] = useState('premium');
    const handleClickSelect = (id) => {
        setSelect(id);
    };

    return (
        <div className={styles.root}>
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    Choose Your Plan
                </div>
                <div className={styles.subTitle}>
                    Let's choose the package that is best for you and explore it happily and cheerfully.
                </div>
            </div>
            <div className={styles.plansContainer}>
                <div className={styles.plansRoot}>
                    {plans.map(plan => (
                        <Box plan={plan} onClickSelect={handleClickSelect} selected={select === plan.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Plans;
