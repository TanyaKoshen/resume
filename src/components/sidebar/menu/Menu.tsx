import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid'
import cl from './Menu.module.css'
import Info from "../info/Info";
import profilePic from '../../../shared/assets/IMG_0533.jpeg'

const menu = [
    {path: '/', id: nanoid(), name: 'Home'},
    {path: 'about', id: nanoid(), name: 'About'},
    {path: 'skills', id: nanoid(), name: 'Skills'},
    {path: 'experience', id: nanoid(), name: 'Experience'},
    {path: 'education', id: nanoid(), name: 'Education'},
    {path: 'contact', id: nanoid(), name: 'Contact'}
]

interface IMenuProps {
    className: string;
    getLocation: (path: string)=>void;
}



const Menu = ({className, getLocation}: IMenuProps) => {



    const [active, setActive] = useState('')

    function handleLinkClick(path: string, name: string){
        getLocation(path);
        setActive(name);
    }
    return (
        <div className={className}>
            <div className={cl['image-container']}>
                <img className={cl.image} src={profilePic} alt='Profile Pic'/>
            </div>
            <Info/>
            {menu.map(el =>
                <Link
                    onClick={()=>handleLinkClick(el.path, el.name)}
                    className={active === el.name ? `${cl.link} ${cl.active}` : cl.link}
                    to={el.path}
                    key={el.id}>
                    {el.name}
                </Link>
            )}
        </div>
    );
};

export default Menu;
