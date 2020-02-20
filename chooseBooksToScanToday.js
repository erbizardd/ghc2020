module.exports = (data, scannedBook)=>{
    var libIdxAndBooksToScanToday = {};

    data.libs.filter((lib)=>(lib.signedIn)).forEach(lib => {
        libIdxAndBooksToScanToday[lib.index] = [];
        for(var i=0; i< lib.capaBook; i++) {
            nextIdx = lib.idxByScoreRev.shift();
            if (nextIdx == null) {
                break;
            }
            if (scannedBook[nextIdx] === undefined) {
                libIdxAndBooksToScanToday[lib.index].push(nextIdx);
                scannedBook[nextIdx] = true;
            }
        }
    });
    return libIdxAndBooksToScanToday;
};