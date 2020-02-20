const fs = require("fs");
exports.writeFile =(resp, fileName) =>  {
    fs.writeFileSync(`results/${fileName}.resp`, `${resp.length}\n${JSON.stringify(resp.reverse()).slice(1, -1).replace(/,/g, " ")}`, 'utf8');
}
