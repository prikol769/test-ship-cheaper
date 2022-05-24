import React, {ReactNode} from 'react';
import {BUTTON_VARIANT} from '../../types/enum';
import styles from './Button.module.css';

type CustomButtonProps = {
    children: ReactNode;
    variant?: BUTTON_VARIANT;
}

const CustomButton: React.FC<CustomButtonProps & React.HTMLProps<HTMLButtonElement>> = (props: CustomButtonProps): JSX.Element => {
    const {children, variant = BUTTON_VARIANT.CONTAINED, ...rest} = props;
    return (
        <button
            className={`
            ${styles.Btn} 
            ${variant === BUTTON_VARIANT.CONTAINED && styles.BtnContained}
            ${variant === BUTTON_VARIANT.OUTLINED && styles.BtnOutlined}
            `}
            {...rest}
        >
            {children}
        </button>
    );
};

export default CustomButton;
