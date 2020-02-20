
sortBooksByScoreInLib = require("./sortBooksByScoreInLib");

exports.process = (data) => {
    data.libs.forEach((lib)=>sortBooksByScoreInLib(data.valueBook, lib));
    console.log(data);
    return new Promise((resolve) => {
    	resolve(data.array)
    })
}
