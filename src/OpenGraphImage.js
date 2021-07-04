import React from "react";
import ReactDOMServer from 'react-dom/server';

export default () => {
    return ReactDOMServer.renderToStaticMarkup(
        <html>
            <head>
                <link
                    rel="stylesheet"
                    href="./styles.css"
                />
            </head>
            <body>
                <header
                    className="About OGImage"
                >
                    <div
                        className="photo"
                    >
                        <img className="photo"/>
                    </div>

                    <div>
                        <h1>
                            Evgeniy Raev
                        </h1>
                        <h3>
                            doing random stuff for money
                        </h3>
                    </div>
                </header>
            </body>
        </html>
    );
}
