import React from "react";
import Project from './Project';
import './index.scss';

export default function Projects({data}) {
    return (
        <div
            className="Projects"
        >
            Projects:
            { data.map((project, i) => (
                <Project
                    key={i}
                    { ...project }
                />
            ))}
        </div>
    )
}
