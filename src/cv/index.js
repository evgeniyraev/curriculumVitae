import React from "react";
import './index.scss';

import Contacts from './Contacts';
import Projects from './Projects';
import Skills from './Skills';
import { projects } from './data';

export default function CV() {
    return (
        <div
            className="CV"
        >
            <header>
                <div
                    className="photo"
                >
                    <img className="photo"/>
                </div>
                <Contacts/>
                <h1>Evgeniy Raev</h1>
                <p>I have 11 years of experince in Front-end mobile, desktop and web development, and in the past 4 years my responsobilaties have grown to lead and expand a team of 7 decelopers for creating an enterprise solution. I also have the oprotunaty to conduct technical trainings for juniors and mentor them individually. I am passioned about working on complex and challenging projects seeming impossible or too expensive. I have experice in UX and gathering technical requirements based on client requests or concept designs.</p>

            </header>

            <Skills
            />

            <Projects
                data={projects}
            />
            
            <a href='./Evgeniy Raev.pdf' download>download</a>
        </div>
    )
}
