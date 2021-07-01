import React from "react";

export default function Project({
    name,
    employer,
    period,
    description,
    stack,
    responsibilities,
}) {
    return (
        <article
            className="Project"
        >
            { [
                {
                    title:"Project",
                    data:name,
                },
                {
                    title:"Employer",
                    data:employer,
                },
                {
                    title:"Period",
                    data:period,
                },
                {
                    title:"Description",
                    data:description,
                },
                {
                    title:"Stack",
                    data:stack.split("\n"),
                },
                {
                    title:"Responsibilities",
                    data:responsibilities,
                },
            ].map(({title, data}, i) => (
                <section
                    key={i}
                >
                    <div
                        className="title"
                    >
                        { title }
                    </div>
                    <div
                        className="description"
                    >
                        { (data instanceof Array) && data.map((el, i) => (
                            <span
                                className="element"
                                key={i}
                            >
                                { el }
                            </span>
                        )) || data}
                    </div>
                </section>
            ))}
        </article>
    )
}
