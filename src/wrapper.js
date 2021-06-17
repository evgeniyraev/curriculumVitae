import React, { Component, Fragment} from "react";
import CV from './cv';

export default function Wrapper() {
    return (
        <html>
            <head>
                <script src="/bundle.js" defer ></script>
                <link rel="stylesheet" href="styles.css"/>
            </head>
            <body>
                it works
                <CV/>
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
            </body>
        </html>
    )
}
