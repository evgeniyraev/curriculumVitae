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
                            "JavaScript",
                            "Swift",
                            "Bash",
                            "MySQL",
                            "Java (Android)",
                            "TypeScript",
                        ]
                    },
                    {
                        title:"Frameworks / Enviroments",
                        list:[
                            "ReactJs",
                            "ReactNative",
                            "NextJs",
                            "Express",
                            "PixiJS",
                            "WebGL",
                            "websocket",
                            "TreeJS",
                            "Electron",
                            "node",
                            "UIKit",
                            "GameKit",
                            "SpriteKit",
                            "MetalKit",
                            "SwiftUI",
                            "PWA",
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
                            "figma",
                        ],
                    },
                    {
                        title:"Tools",
                        list:[
                            "vim",
                            "ssh",
                            "tmux",
                            "docker",
                            "nginx",
                            "jenkins",
                        ]
                    },
                    {
                        title:"Services",
                        list:[
                            "AWS",
                            "Azure",
                            "iTunes Connect",
                            "Adobe Developer Console",
                            "Cloud Kit",
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
                            "leading",
                            "researching",
                            "design / UX",
                            "architecture",

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
