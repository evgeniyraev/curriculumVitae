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
                    data:name,
                    className:"name"
                },
                {
                    data:employer,
                    className:"employer"
                },
                {
                    data:period,
                    className:"period"
                },
                {
                    data:description,
                    className:"description"
                },
                {
                    data:responsibilities,
                    className:"responsibilities"
                },
                {
                    title:"Stack:",
                    data:stack.split("\n"),
                    className:"stack"
                },
            ].map(({title, data, className}, i) => (
                <section
                    key={i}
                    className={className}
                >
                    { title && (
                        <div
                            className="title"
                        >
                            { title }
                        </div>
                    )}
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
