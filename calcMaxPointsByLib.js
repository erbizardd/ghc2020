module.exports = (lib, valueBook)=>{
    let res= 0;
    console.log(valueBook)
    console.log(lib)
    for(var i = 0; i< lib.listBook.length; i++){
        res += valueBook[lib.listBook[i]];
    }
    return res;
}
