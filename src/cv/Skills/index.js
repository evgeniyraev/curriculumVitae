import React from "react";
import './index.scss'

export default function Skills() {
    return(
        <div
        >
            <h2>
                Skills
            </h2>
            <article
                className="Skills"
            >
                {[
                    {
                        title:"Languages",
                        list:[
                            "Swift",
                            "JavaScript",
                            "Bash",
                            "TypeScript",
                            "Objective C"
                        ]
                    },
                    {
                        title:"Frameworks / Environments",
                        list:[
                            "SwiftUI",
                            "UIKit",
                            "ReactJs",
                            "ReactNative",
                            "PixiJS",
                            "Electron",
                            "node",
                            "SpriteKit",
                        ]
                    },
                    {
                        title:"Design",
                        list:[
                            "Photoshop",
                            "Illustrator",
                            "XD",
                            "inDesign",
                            "AutoCAD",
                        ],
                    },
                    {
                        title:"Tools",
                        list:[
                            "vim",
                            "ssh",
                            "tmux",
                            "nginx",
                            "jenkins",
                        ]
                    },
                    {
                        title:"Services",
                        list:[
                            "AWS",
                            "iTunes Connect",
                            "Adobe Developer Console",
                            "PlayStore Console",
                            "Google Analytics",
                        ],
                    },
                    {
                        title:"Soft Skills",
                        list:[
                            "project managment",
                            "team managment",
                            "mentoring",
                            "adaptability",
                            "conflict resolution"
                        ]
                    },
                    {
                        title:"Other",
                        list:[
                            "drawing",
                            "recreational mathematics",
                        ]
                    },

                ].map(({title, list}, i) => (
                    <section
                        key={i}
                    >
                        <h3>
                            { title }
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
