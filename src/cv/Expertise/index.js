import React from "react";
import './index.scss';

export default function Expertise() {
    let curretYer = new Date().getUTCFullYear()
    return (
        <div>
            <h2>
                Areas of Expertise
            </h2>
            <article
                className="Expertise"
            >
                {[
                    {
                        title: "Apple",
                        list: [
                            "product design languages",
                            "processes",
                            `distribution (${curretYer - 2009} years)`,
                            `iOS (${curretYer - 2017} years)`,
                            `watchOS (${curretYer - 2022} years)`,
                            `iPadOS (${curretYer - 2022} years)`,
                            `macOS (${curretYer - 2022} years)`,
                        ]
                    },
                    {
                        title: "Architecture & Development",
                        list: [
                            "Writing future-proof code",
                            "implementation of features",
                            "code review",
                            "user centered features",
                            "UX",
                            "accessibility",
                            "internationalisation",
                        ]
                    },
                    {

                        title: "Team Leading",
                        list: [
                            "assembling",
                            "expanding",
                            "mentoring",
                            "growing",
                            "specialising",
                        ]
                    },
                    {

                        title: "Client Communcation",
                        list: [
                            "gathering requirements",
                            "research",
                            "solution architecture",
                        ]
                    }

                ].map(({ title, list }, i) => (
                    <section
                        key={i}
                    >
                        <h3>
                            {title}
                        </h3>
                        {list.map((el, i) => (
                            <span
                                key={i}
                                className="element"
                            >
                                {el}
                            </span>
                        ))}
                    </section>
                ))}
            </article>
        </div>
    )
}
