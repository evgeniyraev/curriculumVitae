const fs = require('fs');
const path = require("path");
const wrapper = require('../dist/wrapper.js').CV.default;
const puppeteer = require("puppeteer");

var css = fs.readFileSync('./public/styles.css', 'utf8');

const mode = process.argv.some(a => a == "-d") ? "development" : "production" ;

const doctype = "<!DOCTYPE html>";

fs.writeFile(
    './public/index.html',
    doctype + wrapper({cv:mode == "production"}),
    function (err,data)
    {
        if (err) {
            return console.log(err);
        }
        console.log("html exported");
    }
);
const printHTMLpath = path.resolve('./public/print.html');

fs.writeFile(
    printHTMLpath,
    doctype + wrapper({cv:true}),
    function (err,data)
    {
        if (err) {
            return console.log(err);
        }
        console.log("html print exported");
        
        generatePDF()
    }
);

const generatePDF = async () => {
    const output = path.resolve('./public/Evgeniy Raev.pdf');

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(
        'file://'+printHTMLpath,
        {
            waitUntil: 'networkidle0'
        });

    const pdf = await page.pdf({
        format: 'A4',
        path:output,
    });


    await browser.close();

    fs.unlink(printHTMLpath,  (err) => {
        if (err) throw err;
        console.log('successfully deleted /tmp/hello');
    });
}

