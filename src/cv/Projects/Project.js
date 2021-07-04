import React from "react";

export default function Project({
    name,
    employer,
    period,
    description,
    stack,
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
                    title:"Stack:",
                    data:stack,
                    className:"stack"
                },
            ].map(({title, data, className}, i) => (
                <section
                    key={i}
                    className={className}
                >
                    { title && (
                        <h3
                            className="title"
                        >
                            { title }
                        </h3>
                    )}
                        { (data instanceof Array) && data.map((el, i) => (
                            <span
                                className="element"
                                key={i}
                            >
                                { el }
                            </span>
                        )) || /\n/.test(data) && (
                            <div
                                className="description"
                            >
                                { data.split("\n").map((text, i) => (
                                    <p
                                        key={i}
                                    >
                                        { text }
                                    </p>
                                ))}
                            </div>
                        ) || (
                            <div
                                className="description"
                            >
                                { data }
                            </div>
                        )
                        }
                </section>
            ))}
        </article>
    )
}
