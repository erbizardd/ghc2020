chooseNextLibToSignIn = require("./chooseNextLibToSignIn");
module.exports =(data)=>{

    var scannedBook = {}
    var signedUpLibs = []

    var timeToNextSignUp = 0;
    var beingSignedIn = null;
    for (var i = 0; i<= data.tpstt; i++) {
        if (timeToNextSignUp == 0) {
            if (beingSignedIn != null) {
                beingSignedIn.signedIn = true;
                signedUpLibs.push(beingSignedIn);
                beingSignedIn = null;
            }
            var nextLib = chooseNextLibToSignIn(data);
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
    }

    return {"signedUpLibs": signedUpLibs};

};