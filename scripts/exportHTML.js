import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import Wrapper from '../src/wrapper';

let htmlString = ReactDOMServer.renderToStaticMarkup(Wrapper())

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
