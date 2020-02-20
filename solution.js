
exports.process = (data) => {

    console.log(data);

    function computeLibScores(valuesBook, lib) {


        var scores = {}

        var scoreMap = {}
        lib.listBook.forEach(bookIndex => {
            scoreMap[valuesBook[bookIndex]] = bookIndex;                
        });
        var idxOrdererd = []
        Object.keys(scoreMap).reverse().forEach((k)=>idxOrdererd.push(scoreMap[k]));
        lib.scoreMap = scoreMap;
        lib.idxByScoreRev = idxOrdererd;
    }

    data.libs.forEach((lib)=>computeLibScores(data.valueBook, lib));
    return new Promise((resolve) => {
    	resolve(data.array)
    })
}
