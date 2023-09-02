import React from 'react';
import cl from './Skills.module.css'
import {RiJavascriptLine} from "react-icons/ri";
import {BiLogoTypescript} from "react-icons/bi";
import {FaReact} from "react-icons/fa";
import {SiMongodb} from "react-icons/si";
import {GrNode} from "react-icons/gr";
import {SiExpress} from "react-icons/si";
import {BsFiletypeCss} from "react-icons/bs";
import {AiFillHtml5} from "react-icons/ai"


const Skills = () => {

    const skills = [
        {
            skill: 'Javascript',
            range: 90,
            color: 'rgba(199, 152, 34, 0.91)',
            label: <RiJavascriptLine/>
        },
        {
            skill: 'Typescript',
            range: 75,
            color: 'blue',
            label: <BiLogoTypescript/>
        },
        {
            skill: 'React',
            range: 80,
            color: 'cornflowerblue',
            label: <FaReact/>
        },
        {
            skill: 'Mongo',
            range: 70,
            color: 'green',
            label: <SiMongodb/>
        },
        {
            skill: 'NodeJS',
            range: 65,
            color: 'darkgreen',
            label: <GrNode/>
        },
        {
            skill: 'Express',
            range: 80,
            color: 'black',
            label: <SiExpress/>
        },
        {
            skill: 'CSS',
            range: 75,
            color: 'darkblue',
            label: <BsFiletypeCss/>
        },
        {
            skill: 'HTML',
            range: 85,
            color: 'darkred',
            label: <AiFillHtml5/>
        },
    ]

    return (
        <div className={cl['skills-container']}>

            <h4>Skills</h4>
            <p>
                I excel in JavaScript, the cornerstone of modern web development.

                Proficient in React, I build dynamic and interactive user interfaces.

                I leverage Redux to efficiently manage complex application states.

                My expertise extends to Next.js for server-rendered React applications.

                I am skilled in working with RESTful and GraphQL APIs.

                My stack is always evolving, and I'm dedicated to learning beyond my work environment.
            </p>
            {
                skills.map(({skill, range, color, label}) =>
                    <div>
                        <div style={{color: color}}
                        key={skill}
                        >
                            {React.cloneElement(label, {className: cl.label})}
                        </div>
                        <input
                            type="range"
                            value={range}
                            name={skill}
                            style={{backgroundColor: color}}
                            disabled
                        />

                    </div>
                )
            }

        </div>
    );
};

export default Skills;
