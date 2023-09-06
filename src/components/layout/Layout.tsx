import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import Menu from "../sidebar/menu/Menu";
import cl from './Layout.module.css'
import Header from "../header/Header";
import '../../styles/index.css'
import {GiHamburgerMenu} from "react-icons/gi";
import useResponsive from "../../shared/hooks/useResponsive";


const Layout = () => {
    const [isMobile, isTablet] = useResponsive();
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuVisible(!isSideMenuVisible);
    }

    const [currentLocation, setCurrentLocation] = useState(window.location.pathname)


    const getLocation = (path:string)=>{
        console.log(path)
        setCurrentLocation(path);
        toggleSideMenu()
    }

    return (
        <div>
            <Header />
            <div className={cl.layout}>
                {isMobile && (
                    <div onClick={toggleSideMenu}>
                        <GiHamburgerMenu className={cl['hamburger-menu']} />
                    </div>
                )}
                {isMobile ? (
                    isSideMenuVisible && <Menu className={`${cl.menu}`} getLocation={getLocation}/>
                ) : (
                    <Menu className={`${cl['hamburger-menu.hidden']} ${cl.menu}`} getLocation={getLocation}/>
                )}
                <div
                    className={
                        isMobile && isSideMenuVisible
                            ? `${cl['mobile-menu-open']} ${cl.outlet}`
                            : cl.outlet
                    }
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
