module.exports = (data)=>{
    //signeUpLibs c'est une hashmap, pas un array
    console.log(data)
    return data.libs.filter((lib) => !lib.busy).pop()   
};