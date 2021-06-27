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
                    title:"name",
                    data:name,
                },
                {
                    title:"employer",
                    data:employer,
                },
                {
                    title:"period",
                    data:period,
                },
                {
                    title:"description",
                    data:description,
                },
                {
                    title:"stack",
                    data:stack,
                },
                {
                    title:"responsibilities",
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
                        { data }
                    </div>
                </section>
            ))}
        </article>
    )
}
