const fs = require('fs');
const pdf = require('html-pdf-node');
const wrapper = require('../dist/wrapper.js').CV.default;

var css = fs.readFileSync('./public/styles.css', 'utf8') ?? "";

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

pdf.generatePdf({
    content: doctype + wrapper({cv:true, css}),
}, {
    format: 'A4' 
}).then(pdfBuffer => {

    fs.writeFile(
        './public/EvgeniyRaev.pdf',
        pdfBuffer,
        function (err,data)
        {
            if (err) {
                return console.log(err);
            }
            console.log("pdf exported");
        }
    );
});
