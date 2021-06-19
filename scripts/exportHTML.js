import fs from 'fs';
import React from "react";
import ReactDOMServer from 'react-dom/server';

import Wrapper from '../src/wrapper';

console.log(
    "here:",
    process.argv
)

let htmlString = ReactDOMServer.renderToStaticMarkup(
    <Wrapper>
    </Wrapper>
)

fs.writeFile(
    './public/index.html',
    "<!DOCTYPE html>"+htmlString,
    function (err,data)
    {
        if (err) {
            return console.log(err);
        }
        console.log("html exported");

    }
);
