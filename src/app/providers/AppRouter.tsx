import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "../../layout/Layout";
import {nanoid} from "nanoid";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Skills from "../../pages/skills/Skills";
import Education from "../../pages/education/Education";
import Experience from "../../pages/experience/Experience";
import Contact from "../../pages/contact/Contact";
import LoginForm from "../../pages/login/LoginForm";
import Scoreboard from "../../pages/score/board/Scoreboard";

const AppRouter = () => {
    const routes = [
        {path: '', id: nanoid(), element: <Home/>},
        {path: 'about', id: nanoid(), element: <About/> },
        {path: 'skills', id: nanoid(), element: <Skills/>},
        {path: 'education', id: nanoid(), element: <Education/>},
        {path: 'experience', id: nanoid(), element: <Experience/>},
        {path: 'contact', id: nanoid(), element: <Contact/>},
        {path: 'score', id: nanoid(), element:<Scoreboard/>}
    ]
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                {routes.map(el =>
                    <Route
                        path={el.path}
                        element={el.element}
                        key={el.id}
                    />)}
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
            <Route  path={'/login'} element={<LoginForm/>}/>

        </Routes>
    );
};

export default AppRouter;
