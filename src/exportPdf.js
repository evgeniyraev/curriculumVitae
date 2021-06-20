const fs = require('fs');
const pdf = require('html-pdf-node');

var html = fs.readFileSync('./public/index.html', 'utf8');

let options = { format: 'A4' };

let file = { content: html };
pdf.generatePdf(file, options).then(pdfBuffer => {
    fs.writeFile(
        './public/cv.pdf',
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
