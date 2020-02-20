module.exports = (valuesBook, lib)=>{


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