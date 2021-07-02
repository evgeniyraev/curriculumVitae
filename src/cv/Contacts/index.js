import React from "react";

export default function Contacts() {
    return (
        <dl
            className="contacts"
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
                <img
                    className="linkedin"
                    src="./linkedin.svg"
                />
                <a href="www.linkedin.com/in/evgeniy-raev">
                    LinkedIn
                </a>
            </dt>
            <dt>
                <img
                    className="github"
                    src="./github.svg"
                />
                <a href="https://github.com/evgeniyraev/">
                    GitHub
                </a>
            </dt>
        </dl>
    )

}
