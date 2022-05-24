import React from 'react';
import styles from './Select.module.css';

type Option = {
    label: React.ReactNode;
    value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement> & { options: Option[] };

const CustomSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({options, ...props}, ref) => (
        <div className={styles.SelectWrapper}>
            <p className={styles.Label}>{props.title}</p>
            <select className={styles.Select} ref={ref} {...props}>
                {options.map(({label, value}) => (
                    <option value={value}>{label}</option>
                ))}
            </select>
        </div>
    )
);

export default CustomSelect;
