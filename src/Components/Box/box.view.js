import React from 'react';
import styles from './box.module.css';
import boxFree from '../../assets/PartTwo/boxFree.png';
import simpleCheckIcon from '../../assets/PartTwo/simpleCheckIcon.png';
import Button from '../Button';

const Box = (props) => {
    const {plan, onClickSelect, selected} = props;
    const boxStyles = {};
    if (selected){
        boxStyles.border = '2px solid #F53838'
    }

    return (
        <div style={boxStyles} className={styles.box}>
            <img src={boxFree} className={styles.imgBox}/>
            <div className={styles.text}>
                <div className={styles.titleBox}>
                    {plan.title}
                </div>
                <div className={styles.descBox}>
                    {plan.features.map(feature => (
                        <div className={styles.points}>
                            <img src={simpleCheckIcon} />
                            <div className={styles.textPoint}>{feature}</div>
                        </div>
                        ))}
                </div>
                <div className={styles.priceBox}>
                    <div className={styles.priceText}>
                        <b>{plan.price} </b>
                        {plan.id !== 'free' && (
                            <span>
                                / mo
                            </span>
                        )}
                    </div>
                    <Button label="Select" variant="red" bold onClick={() => onClickSelect(plan.id)}/>
                </div>
            </div>
        </div>
    );
};

export default Box;
