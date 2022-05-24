import React from 'react';
import styles from './Input.module.css'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>;


const CustomInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (

    <div className={styles.InputWrapper}>
        <p className={styles.Label}>{props.title}{props.required && '*'}</p>
        <input className={styles.Input} ref={ref} {...props} />
    </div>
    )
);


export default CustomInput;
