import React, { useState} from 'react';
import {Outlet} from 'react-router-dom';
import Menu from "../sidebar/menu/Menu";
import cl from './Layout.module.css'
import Header from "../header/Header";
import '../../styles/index.css'
import {GiHamburgerMenu} from "react-icons/gi";
import useResponsive from "../../shared/hooks/useResponsive";


const Layout = () => {
    const [isMobile ] = useResponsive();
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuVisible(!isSideMenuVisible);
    }

    const [_currentLocation , setCurrentLocation] = useState(window.location.pathname)


    const getLocation = (path:string)=>{
        setCurrentLocation(path);
        toggleSideMenu()
    }


    return (
        <div>
            <Header getLocation={getLocation}/>
            <div className={cl.layout}>
                {isMobile && (
                    <div onClick={toggleSideMenu}>
                        <GiHamburgerMenu className={cl['hamburger-menu']} />
                    </div>
                )}
                {isMobile && !isSideMenuVisible? (
                     <Menu className={`${cl.menu} ${cl['hide-on-small-screen']}` }
                           getLocation={getLocation}/>
                ) : (
                    <Menu
                        className={`${cl['menu.mobile']} ${cl.menu}`}
                        getLocation={getLocation}/>
                )}
                <div
                    className={
                        isMobile && isSideMenuVisible
                            ? `${cl['mobile-menu-open']} ${cl.outlet}`
                            : cl.outlet
                    }
                >
                    <div className={
                        !isMobile ?
                        cl['outlet-container']
                            : `${cl.mobile} ${cl['outlet-container']}`
                    }>
                        <Outlet />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Layout;
