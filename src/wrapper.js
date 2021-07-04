import React, { Component, Fragment} from "react";
import ReactDOMServer from 'react-dom/server';

import CV from './cv';

export default ({
    cv = false,
    css = false
}) => {
    return ReactDOMServer.renderToStaticMarkup(
        <html>
            <head>
                <title>
                    Evgeniy Raev
                </title>
                <script src="./bundle.js" defer ></script>
                { css && (
                    <style>
                        { css }
                    </style>
                    ) || (
                    <link
                        rel="stylesheet"
                        href="./styles.css"
                    />
                )}
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1.0"
                />
                <meta property="og:title" content="Evgeniy Raev's CV" />
                <meta property="og:url" content="http://evgeniy.raev.dev" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Evgeniy Raev Sotware Architect"/>
                <meta property="og:image" content="https://evgeniy.raev.dev/cv/preview.jpeg"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content="@evgeniyraev"/>
            </head>
            <body>
                <div
                id="app"
            >
                    { cv && (
                        <CV/>
                    )}
                </div>
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
            </body>
        </html>
    )
}
