exports.readFile = (file) => {
    
    const fileSplited = file.split("\n");
    const meta = fileSplited[0].split(" ").map((item) => {
        return parseInt(item, 10);
    })
    const array = fileSplited[1].split(" ").map((item) => {
        return parseInt(item, 10);
    })

    return {meta, array};
}
    