module.exports = (data, daysRemaining)=>{
    //signeUpLibs c'est une hashmap, pas un array
    data.libs.filter((lib) =>{
        return !lib.busy && daysRemaining > lib.delais
    } ).pop();
    return data.libs.filter((lib) =>{
        return !lib.busy && daysRemaining > lib.delais
    } ).pop();
};