const fs = require("fs");

/**
 * Prend en param une resp de la forme : 
 * let res = 
 * [
        {
            "indexLib": 1,
            "scannedBooks": [5, 2, 3]

        },
        {
            "indexLib": 0,
            "scannedBooks": [0, 1, 2, 3, 4]
        }
    ];
 */
exports.writeFile =(resp, fileName) =>  {

    let output = `${resp.length}\n`;

    resp.forEach(lib => {
        output += `${lib.indexLib} ${lib.scannedBooks.length}\n`;
        output += `${JSON.stringify(lib.scannedBooks).slice(1, -1).replace(/,/g, " ")}\n`;
    });

    console.log(output);

    fs.writeFileSync(`results/${fileName}.resp`, output, 'utf8');
}
