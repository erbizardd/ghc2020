exports.readFile = (file) => {
    
    const fileSplited = file.split("\n");
    const meta = fileSplited[0].split(" ").map((item) => {
        return parseInt(item, 10);
    })
    const valueBook = fileSplited[1].split(" ").map((item) => {
        return parseInt(item, 10);
    })
    const libs= [];

    for(var i = 2; i + 1  < fileSplited.length; i= i+2){

        const l1 = fileSplited[i].split(" ").map((item) => {
            return parseInt(item, 10);
        })
        const l2 = fileSplited[i+1].split(" ").map((item) => {
            return parseInt(item, 10);
        })
        libs.push({
            delais: l1[1],
            listBook: l2,
            index: (i/2)-1,
            capaBook: l1[2]
        })
    }
    console.log({tpstt:meta[2], valueBook,libs})
    //return {tpstt:meta[2], valueBook,libs:[]};
}
    