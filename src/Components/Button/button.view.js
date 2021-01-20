import React from 'react';
import styles from './button.module.css';
import classNames from 'classnames';

const Button = (props) => {
    const {variant, label, onClick, bold} = props;
    const buttonClass = classNames(styles.button,  {
        [styles.buttonRed]: variant === 'red',
        [styles.buttonBold]: bold,
        [styles.completeBoldButton]: variant === "completeBold",
        [styles.completeRedBoldButton]: variant === "redBold",
        [styles.specialButton]: variant === "special",
    });

    return (
        <div className={buttonClass} onClick={onClick}>
            {label}
        </div>
    );
};

export default Button;
