import React from 'react';
import cl from './Experince.module.css'

const workExperience = [
    {
        workPlace: 'Digital Vertex Enterprises',
        role: 'Full-Stack Developer',
        description: 'Proficient in React, I\'ve successfully developed comprehensive CRM systems that allow users to personalize a significant portion of application elements. My expertise extends to harnessing TypeScript\'s capabilities for proactive error reduction, enhancing content accuracy, accessibility, and SEO through semantic HTML markup, and improving code reusability with custom React hooks. I seamlessly integrate CSS styles, combining Material-UI and Bootstrap frameworks for a cohesive appearance. Security is a priority, with JWT authorization implementation. I optimize API calls with GraphQL and Apollo Client, implementing caching for a 60% reduction in query times. Bug resolution, real-time features like messenger chat, and notifications are integral to my contributions. I conduct rigorous unit testing and mentor newcomers for team integration.',
        date: '2020 - present',
        location: 'Atlanta, GA'
    },
    {
        workPlace: 'Rhenne Trade',
        role: 'Frontend Developer',
        description: 'I specialized in crafting responsive user interfaces with React and CSS libraries like Bootstrap, enhancing user engagement. My contributions also extended to codebase improvements through Redux, fostering code maintainability and efficient state management. Active involvement in code reviews and constructive feedback to teammates boosted overall code quality. I prioritized unit testing for new features, simplifying debugging and ensuring code reliability. Additionally, I maintained comprehensive documentation, including user guides and technical specs, to facilitate user and developer understanding.',
        date: '2018 - 2020',
        location: 'Houston, TX'
    },
]

const Experience = () => {
    return (
        <div className={cl['experience-container']}>
            <h3>Experience</h3>
            <h2>Work Experience</h2>
            {workExperience.map(el =>
                <div key={el.date}>
                    <h4>{el.role}</h4>
                    <h5>{el.workPlace}</h5>
                    <div className={cl['text-area']}>
                        <span>{el.location}</span>
                        <i>{el.date}</i>
                    </div>
                    <p>{el.description}</p>
                </div>)}
        </div>
    );
};

export default Experience;
