import React from 'react';
import {GrLinkedin} from "react-icons/gr";
import {MdEmail} from "react-icons/md";
import {MdLocationOn} from "react-icons/md";
import cl from './Contact.module.css'

const icons = [
    {
        text: 'LinkedIn',
        type: 'linkedIn',
        href: 'https://www.linkedin.com/in/tatiana-koshenskaya/',
        icon: <GrLinkedin/>
    },
    {
        text: 'tanya.koshen@gmail.com',
        type: 'email',
        href: 'mailto: tanya.koshen@gmail.com',
        icon: <MdEmail/>
    },
    {
        text: 'Cary, NC',
        type: 'address',
        href: 'https://www.google.com/maps/place/Raleigh,+NC/@35.8439338,-78.8098674,11z/data=!3m1!4b1!4m6!3m5!1s0x89ac5a2f9f51e0f7:0x6790b6528a11f0ad!8m2!3d35.7795897!4d-78.6381787!16zL20vMGZ2eWc?entry=ttu',
        icon: <MdLocationOn/>
    },
]


const Contact = () => {

    const typeMapping = (type: string, href: string, text: string) => {
        return (
            <a target={(type === 'address' || 'linkedIn') ? '_blank' : ''} href={href} rel='noreferrer'>
                {text}
            </a>
        )
    }
    return (
        <div>
            {icons.map(({text, type, href, icon}) =>
                <div key={text}  className={cl['icon-wrapper']}>
                    <div>
                        {React.cloneElement(icon, {className: cl.icon})}
                    </div>
                    <div className={cl['text']}>
                        {typeMapping(type, href, text)}
                    </div>
                </div >
            )}
        </div>
    );
};

export default Contact;
