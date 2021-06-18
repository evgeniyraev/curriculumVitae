import React, { Component, Fragment} from "react";
import CV from './cv';

export default function Wrapper() {
    return (
        <html>
            <head>
                <title>
                    Evgeniy Raev
                </title>
                <script src="./bundle.js" defer ></script>
                <link rel="stylesheet" href="./styles.css"/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            </head>
            <body>
                <div
                    id="app"
                >
                    <CV/>
                </div>
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
            </body>
        </html>
    )
}
