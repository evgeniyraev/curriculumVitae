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
    let curretYer = new Date().getFullYear()
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
                With { curretYer - 2010} years as a Frontend developer, I've excelled in mobile, desktop
                <OC/>
                and web development. Over the past {curretYer - 2015} years, I've led teams across varied projects, providing technical training and mentorship. Specialising in UX, I craft visionary designs and prototypes
                <OC/>
                decoding technical requirements into actionable insights.
            </p>

        </header>
    )
}
