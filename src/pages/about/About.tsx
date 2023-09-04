import React from 'react';
import cl from './About.module.css'

const About = () => {
    return (
        <div className={cl.about}>
            <h3>about</h3>
            <h2>who am I?</h2>
            <p>
                I'm a web developer who's passionate about crafting digital experiences that boost company profits and make life easier for people.

                I firmly believe in the power of teamwork – the most incredible innovations happen when talented individuals come together. I'm a lifelong learner with a diverse academic background, which gives me a unique perspective when tackling challenges.

                Outside of work, I'm all about exploring new places, delving into history, embarking on road trips with my family, hiking in the great outdoors, and sharing a jog with my loyal canine companion.

                I'm always open to exciting opportunities and new challenges. Let's connect and create something amazing together!

            </p>
        </div>
    );
};

export default About;
