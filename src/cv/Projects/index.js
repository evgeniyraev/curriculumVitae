import React from "react";
import Project from './Project';
import './index.scss';

//TODO: Add some photos, links, references
export default function Projects({data, title = "Projects"}) {
    return (
        <div
            className="Projects"
        >
            <h2>
                {title}
            </h2>
            { data.map((project, i) => (
                <Project
                    key={i}
                    { ...project }
                />
            ))}
        </div>
    )
}
