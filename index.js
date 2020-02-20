const fs = require("fs"),
	readFile = require("./readFile"),
	solution = require("./solution")
	writeFile = require("./writeFile");
let filesToCheck = [];
if(process.env.PATHFILE !== "all"){
	filesToCheck.push({content: fs.readFileSync(`data/${process.env.PATHFILE}`, 'utf8'), name: process.env.PATHFILE});
}else{
	const files = fs.readdirSync("data");
	files.forEach((item)=>{
		if(item.endsWith(".in")){
			filesToCheck.push({content: fs.readFileSync(`data/${item}`, 'utf8'), name: item});
		}
	})
}
filesToCheck.forEach(async (file)=>{
	const data = readFile.readFile(file.content);
	const res = await solution.process(data);
	writeFile.writeFile(res,file.name);
})



