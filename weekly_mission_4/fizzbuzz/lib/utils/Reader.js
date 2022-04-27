const fs = require("fs"); // Se llama el File System Module de Node JS

class Reader {

    // se agrega un método estático denominado readJsonFile
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path); // lista de explorers del archivo JSON
                   
        return JSON.parse(rawdata);
    } 
}


module.exports = Reader
