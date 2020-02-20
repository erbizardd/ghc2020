const calcMaxPoint = require("./calcMaxPointsByLib")
module.exports = (data, daysRemaining)=>{

    data.libs.sort(function(a, b) {
        return calcMaxPoint(a,data.valueBook) - calcMaxPoint(b,data.valueBook);
    });
    for (let index = 0; index < data.libs.length; index++) {
        if(!data.libs[index].busy && daysRemaining > data.libs[index].delais){
            return data.libs[index]
        }
        
    }

};
