import React, {useState} from 'react';
import cl from './Button.module.css'

interface IButtonProps {
    children?: React.ReactNode | string;
    onClick?: () => void;
    disabled?: boolean
}

const Button = ({children, ...props}: IButtonProps) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        if (!props.disabled && props.onClick) {
            props.onClick();
            setIsClicked(true)
        }
        setTimeout(() => {
            setIsClicked(false)
        }, 300)
    }

    const buttonClasses = `${cl.btn} ${props.disabled ? cl.disabled : ''} ${isClicked ? cl.clicked : ''}`
    return (
        <div className={cl['btn-container']}>
            <div
                onClick={handleClick}
                className={buttonClasses}
            >
                {children}
            </div>
        </div>
    );
};
export default Button;
