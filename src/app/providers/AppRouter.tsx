import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "../../components/layout/Layout";
import {nanoid} from "nanoid";
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
    // const routes = [
    //     {path: '/', id: nanoid(), element: <Home/>},
    //     {path: 'about', id: nanoid(), element: <About/>},
    //     {path: 'skills', id: nanoid(), element: <Skills/>},
    //     {path: 'education', id: nanoid(), element: <Education/>},
    //     {path: 'experience', id: nanoid(), element: <Experience/>},
    //     {path: 'contact', id: nanoid(), element: <Contact/>},
    //     {path: 'score', id: nanoid(), element: <Scoreboard/>},
    //     {
    //         path: 'create', id: nanoid(), element: <CreateRes/>,
    //         children: [
    //             {path: 'login', id: nanoid(), element: <Login/>},
    //             {path: 'register', id: nanoid(), element: <CreateRes/>},
    //
    //         ]
    //     }
    // ]
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
