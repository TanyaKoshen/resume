import React from 'react';
import cl from './Download.module.css';

interface IButtonProps{
    children: string | React.ReactNode;
    onClick: ()=>void;
}

const DownLoad = ({children, ...props}: IButtonProps) => {
    return (
        <button {...props} className={cl.btn}>
            {children}
        </button>
    );
};

export default DownLoad;
