import React from "react";
import './index.scss';

import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Download from './Download';
import { projects } from './data';

export default function CV() {
    return (
        <div
            className="CV"
        >
            <About/>
            <Download/>
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
