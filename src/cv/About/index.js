import React, { Fragment } from "react";
import './index.scss';
import Contacts from './Contacts';
import Tooltip from '../Common/Tooltip';

const OC = () => (
    <Tooltip
        tip={(
            <Fragment>
                Oxford comma <a href="https://en.wikipedia.org/wiki/Serial_comma">more</a>
            </Fragment>
        )}
    >
        {", "}
    </Tooltip>
)

export default function About() {
    return (
        <header
            className="About"
        >
            <div
                className="photo"
            >
                <img className="photo"/>
            </div>
            <Contacts/>
            <h1>Evgeniy Raev</h1>
            <p>
                I have 11 years of experience as a Front-end developer in mobile, desktop
                <OC/>
                and web development. In the past 4 years my responsibilities have grown to lead and expand teams for mobile, web, enterprise
                <OC/>
                and game projects.
            I also have the oportunity to conduct technical trainings for juniors and mentor them individually. I am passionate about working on complex and challenging projects seeming impossible or too expensive. I have experience in UX and gathering technical requirements based on client requests or concept designs.
            </p>

        </header>
    )
}
