import React from "react";
import './index.scss';

import About from './About';
import Skills from './Skills';
import Education from './Education';
import Download from './Download';
import Expertise from "./Expertise";
import Projects from "./Projects";
import { carrer } from './data'

export default function CV() {
    return (
        <div
            className="CV"
        >
            <About/>
            <Download/>
            <Skills
            />
            <Expertise/>
            <Projects
                title="Career"
                data={carrer}

            />
        </div>
    )
}
