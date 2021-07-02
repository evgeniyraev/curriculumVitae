import React from "react";
import './index.scss'

export default function Skills() {
    return(
        <article
            className="Skills"
        >
            <h2>
                Skills
            </h2>
            {[
                {
                    title:"Languages",
                    list:[
                        "javascript",
                        "swift",
                        "bash",
                        "mysql",
                        "Java (Android)",
                        "typescript",
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
                        "docker",
                        "PWA",
                        "jenkins",
                        "nginx"
                    ]
                },
                {
                    title:"Software",
                    list:[
                        "Photoshop",
                        "Illustrator",
                        "XD",
                        "inDesign",
                        "AutoCAD",
                        "figma",
                        "vim",
                        "ssh",
                        "tmux",
                    ],
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
                    title:"Project Managment / Team Lead / SoftSkills",
                    list:[
                        "mentoring",
                        "leading",
                        "researching",
                        "design / UX",
                        "",

                    ]
                },
                {
                    title:"Education / Other",
                    list:[
                        "Sofia University St. Kliment Ohridski - Computer Science",
                        "University of Architecture, Civil Engineering  and Geodesy - Construction Engineering",
                        "Professional Hight school of Civil Engineering and Geodesy - Construction and Architecture",
                        "drawing",
                        "english",
                    ]
                },

            ].map(({title, list}, i) => (
                <section
                    key={i}
                >
                    <h3>
                        { title }
                    </h3>
                    <div>
                        {list.map((el, i) => (
                            <span
                            key={i}
                        >
                                {el}
                        </span>
                        ))}
                    </div>
                </section>
            ))}
        </article>
    )
}
