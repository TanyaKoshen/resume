import React from 'react';
import cl from './Skills.module.css'
import {RiJavascriptLine} from "react-icons/ri";
import {BiLogoTypescript} from "react-icons/bi";
import {FaReact} from "react-icons/fa";
import { SiMongodb} from "react-icons/si";
import {GrGraphQl, GrNode} from "react-icons/gr";
import {SiExpress} from "react-icons/si";
import {BsFiletypeCss} from "react-icons/bs";
import {AiFillHtml5} from "react-icons/ai"
import {nanoid} from "nanoid";


const Skills = () => {

    const skills = [
        {
            id: nanoid(),
            skill: 'Javascript',
            range: 90,
            color: 'rgba(199, 152, 34, 0.91)',
            label: <RiJavascriptLine/>
        },
        {
            id: nanoid(),
            skill: 'Typescript',
            range: 75,
            color: 'blue',
            label: <BiLogoTypescript/>
        },
        {
            id: nanoid(),
            skill: 'React',
            range: 80,
            color: 'cornflowerblue',
            label: <FaReact/>
        },
        {
            id: nanoid(),
            skill: 'Mongo',
            range: 70,
            color: 'green',
            label: <SiMongodb/>
        },
        {
            id: nanoid(),
            skill: 'NodeJS',
            range: 65,
            color: 'darkgreen',
            label: <GrNode/>
        },
        {
            id: nanoid(),
            skill: 'Express',
            range: 80,
            color: 'black',
            label: <SiExpress/>
        },
        {
            id: nanoid(),
            skill: 'CSS',
            range: 75,
            color: 'darkblue',
            label: <BsFiletypeCss/>
        },
        {
            id: nanoid(),
            skill: 'HTML',
            range: 85,
            color: 'darkred',
            label: <AiFillHtml5/>
        },
        {
            id: nanoid(),
            skill: 'Apollo GraphQL',
            range: 85,
            color: 'rgb(205,56,205)',
            label: <GrGraphQl/>
        },
    ]

    return (
        <div className={cl['skills-container']}>
            <h3>Skills</h3>
            <h2>Skills</h2>
            <p>
                I excel in JavaScript, the cornerstone of modern web development.

                Proficient in React, I build dynamic and interactive user interfaces.

                I leverage Redux to efficiently manage complex application states.

                My expertise extends to Next.js for server-rendered React applications.

                I am skilled in working with RESTful and GraphQL APIs.

                My stack is always evolving, and I'm dedicated to learning beyond my work environment.
            </p>
            <div className={cl['skills-columns']}>
                {skills.map(({id, skill, range, color, label}) =>
                    <div
                        key={id}
                        className={cl['skills-label-container']}>
                        <div style={{color: color}}
                             className={cl.skills}>
                            {React.cloneElement(label, {className: cl.label})}
                        </div>
                        <div className={cl.skills}>
                            <input
                                type="range"
                                value={range}
                                name={skill}
                                style={{backgroundColor: color}}
                                disabled
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
