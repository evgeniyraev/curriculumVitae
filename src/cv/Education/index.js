import React from "react";
import './index.scss';

export default function Education() {
    return (
        <div
            className="Education"
        >
            <h2>
                Academic
            </h2>
            <article
                className="Skills"
            >
                {[
                    {
                        title:"Education",
                        list:[
                            "Sofia University St. Kliment Ohridski - Computer Science - not finished",
                            "University of Architecture, Civil Engineering and Geodesy - Construction Engineering - not finished",
                            "Professional Hight school of Civil Engineering and Geodesy - Construction and Architecture",
                        ]
                    },
                    {
                        title:"Languages",
                        list:[
                            "Bulgarian - native",
                            "English - fluent",
                            "French - beginner",
                            "German - forgotten",
                        ],
                    }

                ].map(({title, list}, i) => (
                    <section
                        key={i}
                    >
                        <h3>
                            { title }
                        </h3>
                        <ul>
                            {list.map((el, i) => (
                                <li
                                    key={i}
                                >
                                    {el}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}

            </article>
        </div>
    )
}
