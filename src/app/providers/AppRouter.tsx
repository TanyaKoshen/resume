import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Skills from "../../pages/skills/Skills";
import Education from "../../pages/education/Education";
import Experience from "../../pages/experience/Experience";
import Contact from "../../pages/contact/Contact";
import Scoreboard from "../../pages/score/board/Scoreboard";
import Login from "../../pages/resumeBulder/login/Login";
import Register from "../../pages/resumeBulder/register/Register";
import UserResume from "../../pages/resumeBulder/resumeBuilder/UserResume";

const AppRouter = () => {

    return (

        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='skills' element={<Skills/>}/>
                <Route path='education' element={<Education/>}/>
                <Route path='experience' element={<Experience/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='score' element={<Scoreboard/>}/>
                <Route path='create' element={<UserResume/>}>
                    <Route path='register' element={<Register/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='*' element={<UserResume/>}/>
                </Route>
                <Route path='*' element={<Home/>}/>
            </Route>
        </Routes>


    );
};
export default AppRouter;
