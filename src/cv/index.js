import React from "react";
import './index.scss';

import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import { projects } from './data';

export default function CV() {
    return (
        <div
            className="CV"
        >
            <About/>
            <a href='./Evgeniy Raev.pdf' download>download</a>
            <Skills
            />
            <Projects
                data={projects}
            />
            <Education
            />
        </div>
    )
}
