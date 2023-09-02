import React from 'react';
import {Outlet} from 'react-router-dom';
import Menu from "../components/sidebar/menu/Menu";
import cl from './Layout.module.css'

const Layout = () => {
    return (
        <div className={cl.layout}>
            <Menu className={cl.menu}/>
            <div className={cl.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
