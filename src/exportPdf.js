const fs = require('fs');
const path = require("path");
const wrapper = require('../dist/wrapper.js').CV.default;
const OpenGraphImage = require('../dist/OpenGraphImage.js').CV.default;
const puppeteer = require("puppeteer");

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

const generatePDF = async (target, source, format="pdf") => {
    const output = path.resolve(`./public/${target}`);


    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(
        'file://'+source,
        {
            waitUntil: 'networkidle0'
        }
    );

    if(format == "pdf") {
        const pdf = await page.pdf({
            format: 'A4',
            path:output,
        });
    }

    if(format == "jpg") {
        const image = await page.screenshot({
            type:"jpeg",
            path:output,
            quality:100,
            fullpage:true,
            clip: {
                x:0,
                y:0,
                width:1200,
                height:627,
            }

        });
    }

    await page.close();
    await browser.close();

    fs.unlink(source,  (err) => {
        if (err) throw err;
        console.log('deleted temp html');
    });
}

if(mode == "production") {
    const printHTMLpath = path.resolve('./public/print.html');
    const OGImage = path.resolve('./public/ogimage.html');
    
    fs.writeFile(
        printHTMLpath,
        doctype + wrapper({cv:true}),
        function (err,data)
        {
            if (err) {
                return console.log(err);
            }
            
            generatePDF('./Evgeniy Raev.pdf', printHTMLpath)
        }
    );
    
    fs.writeFile(
        OGImage,
        doctype + OpenGraphImage(),
        function (err,data)
        {
            if (err) {
                return console.log(err);
            }
            console.log("html og exported");
            
            generatePDF('./preview.jpeg', OGImage, "jpg")
        }
    );
}
