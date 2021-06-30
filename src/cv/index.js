import React from "react";
import './index.scss';

import Projects from './Projects';
import { projects } from './data';

export default function CV() {
    return (
        <div
            className="CV"
        >
            <img className="photo"/>
            <h1>Evgeniy Raev</h1>
            <Projects
                data={projects}
            />
            
            <a href='./Evgeniy Raev.pdf' download>download</a>
        </div>
    )
}
