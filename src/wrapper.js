import fs from 'fs';
import React, { Component, Fragment} from "react";
import ReactDOMServer from 'react-dom/server';

import CV from './cv';

const mode = process.argv.some(a => a == "-d") ? "development" : "production" 

let htmlString = "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(
    <html>
        <head>
            <title>
                Evgeniy Raev
            </title>
            <script src="./bundle.js" defer ></script>
            <link rel="stylesheet" href="./styles.css"/>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1.0"
            />
        </head>
        <body>
            <div
            id="app"
        >
                { mode == "production" && (
                    <CV/>
                )}
            </div>
            <noscript>
                You need to enable JavaScript to run this app.
            </noscript>
        </body>
    </html>
)

fs.writeFile(
    './public/index.html',
    htmlString,
    function (err,data)
    {
        if (err) {
            return console.log(err);
        }
        console.log("html exported");
    }
);

