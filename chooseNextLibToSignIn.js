module.exports = (data, daysRemaining)=>{
    //signeUpLibs c'est une hashmap, pas un array
    console.log(daysRemaining)
    console.log(data.libs.filter((lib) =>{
        console.log(lib.delais)
        return !lib.busy && daysRemaining > lib.delais
    } ).pop())
    return data.libs.filter((lib) =>{
        return !lib.busy && daysRemaining > lib.delais
    } ).pop()
};