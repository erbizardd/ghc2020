
exports.process = (data) => {



    function computeLibScores(valuesBook, lib) {


        scores = {}

        scoreMap = {}
        lib.listBook.forEach(bookIndex => {
            scoreMap[valuesBook[bookIndex]] = bookIndex;                
        });
        lib.scoreMap = scoreMap;
    }
    

    return new Promise((resolve) => {
    	resolve(data.array)
    })
}

valueBook -> scores
libs: listBook index