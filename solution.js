
sortBooksByScoreInLib = require("./sortBooksByScoreInLib");
engine1 = require("./engine1");
exports.process = (data) => {
    data.libs.forEach((lib)=>sortBooksByScoreInLib(data.valueBook, lib));
    let out = engine1(data);
    return new Promise((resolve) => {
    	resolve(out);
    })
}
