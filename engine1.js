chooseNextLibToSignIn = require("./chooseNextLibToSignIn");
chooseBooksToScanToday = require("./chooseBooksToScanToday");
calcMaxPoint = require("./calcMaxPointsByLib");
module.exports =(data)=>{

    var scannedBook = {}
    var signedUpLibs = []
    data.libs.sort(function(a, b) {
        return calcMaxPoint(a,data.valueBook) - calcMaxPoint(b,data.valueBook);
    });

    var timeToNextSignUp = 0;
    var beingSignedIn = null;
    var ret = {};
    for (var i = 0; i<= data.tpstt; i++) {
        console.log("running day " + i + ' of ' + data.tpstt);
        if (timeToNextSignUp == 0) {
            if (beingSignedIn != null) {
                beingSignedIn.signedIn = true;
                signedUpLibs.push(beingSignedIn);
                ret[beingSignedIn.index] = [];
                beingSignedIn = null;
            }
            var nextLib = chooseNextLibToSignIn(data, data.tpstt - i);
            if (nextLib == null) {
                break;
            }
            timeToNextSignUp = nextLib.delais;
            beingSignedIn = nextLib;
            nextLib.busy = true;
            nextLib.signedIn = false;
        } else {
            timeToNextSignUp-=1;
        }
        
        var booksToScanToday = chooseBooksToScanToday(data, scannedBook);
        Object.keys(booksToScanToday).forEach((idx)=>{
            ret[idx] = ret[idx].concat(booksToScanToday[idx]);
        })
    }
    out = [];
    signedUpLibs.forEach((lib)=>{
        if (ret[lib.index].length) {
            out.push({"indexLib": lib.index, "scannedBooks": ret[lib.index]});
        }
    });
    return out;

};