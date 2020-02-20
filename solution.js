
sortBooksByScoreInLib = require("./sortBooksByScoreInLib");
engine1 = require("./engine1");
exports.process = (data) => {
    data.libs.forEach((lib)=>sortBooksByScoreInLib(data.valueBook, lib));
    console.log(data);
    var signedUpLibs = engine1(data);
    console.log(signedUpLibs);
    return new Promise((resolve) => {
    	resolve(data.array)
    })
}
