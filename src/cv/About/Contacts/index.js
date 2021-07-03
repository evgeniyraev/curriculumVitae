import React from "react";
import './index.scss';

export default function Contacts() {
    return (
        <dl
            className="Contacts"
        >
            <dt>
                <a href="mailto:evgeniy@raev.dev?subject=Big%20News&body=Body-goes-here">
                    evgeniy@raev.dev
                </a>
            </dt>
            <dt>
                <a href="https://evgeniy.raev.dev">
                    evgeniy.raev.dev
                </a>
            </dt>
            <dt>
                <a href="tel:+359883366964">
                    +359883366964
                </a>
            </dt>
            <dt>
                <a href="https://github.com/evgeniyraev/">
                    <img
                        className="github"
                        src="./github.svg"
                    />
                </a>
                <a href="https://www.linkedin.com/in/evgeniy-raev">
                    <img
                        className="linkedin"
                        src="./linkedin.svg"
                    />
                </a>
            </dt>
        </dl>
    )

}
