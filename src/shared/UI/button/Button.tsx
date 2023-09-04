import React from 'react';
import cl from './Button.module.css';

interface IButtonProps{
    children: string | React.ReactNode;
    onClick: ()=>void;
}

const Button = ({children, ...props}: IButtonProps) => {
    return (
        <button {...props} className={cl.btn}>
            {children}
        </button>
    );
};

export default Button;
