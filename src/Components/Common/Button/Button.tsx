import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    secondary?: boolean
}

const Button: React.FC<SuperButtonPropsType> = (
    {
        className, secondary,
        ...restProps
    }
) => {
    const finalClassName = `${secondary ? s.secondary : s.primary} ${s.btn} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
};

export default Button;