chooseNextLibToSignIn = require("./chooseNextLibToSignIn");
chooseBooksToScanToday = require("./chooseBooksToScanToday");
module.exports =(data)=>{

    var scannedBook = {}
    var signedUpLibs = []

    var timeToNextSignUp = 0;
    var beingSignedIn = null;
    var ret = {};
    for (var i = 0; i<= data.tpstt; i++) {
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
        out.push({"indexLib": lib.index, "scannedBooks": ret[lib.index]});
    });
    return out;

};