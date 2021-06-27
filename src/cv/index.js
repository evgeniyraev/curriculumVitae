import React from "react";
import './index.scss';

import Projects from './Projects';
import { projects } from './data';

export default function CV() {
    return (
        <div
            className="CV"
        >
            Evgeniy Raev
            <Projects
                data={projects}
            />
            
            <a href='./cv.pdf'>download</a>
        </div>
    )
}
