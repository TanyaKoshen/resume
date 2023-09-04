import React from 'react';
import {Outlet} from 'react-router-dom';
import Menu from "../components/sidebar/menu/Menu";
import cl from './Layout.module.css'
import Header from "../components/header/Header";

const Layout = () => {

    return (
        <div>
            <Header/>
            <div className={cl.layout}>

                <Menu className={cl.menu}/>
                <div className={cl.outlet}>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default Layout;
