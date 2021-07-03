import React from "react";
import './index.scss';

export default function Download() {
    return (
        <div
            className="Download"
        >
            <a
                className=""
                href='https://evgeniy.raev.dev/cv/Evgeniy Raev.pdf'
                download
            >
                DOWNLOAD THIS CV
            </a>
            <a
                className=""
                href='https://github.com/evgeniyraev/curriculumVitae'
            >
                VIEW SOURCE
            </a>
        </div>
    )
}
