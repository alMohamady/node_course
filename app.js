const {readFile, writeFile} = require('fs').promises;

//const util = require('util');
//const readFileUtile = util.promisify(readFile);
//const writeFileUtile = util.promisify(writeFile);

const start = async() => {
    try {
        const file1 = await readFile('./content/almohamady.txt', 'utf-8');
        const file2 = await readFile('./content/myFolder/test.txt', 'utf-8');
        console.log(file1, file2);
        await writeFile('./content/result-util.text'
                           , `file1 : ${file1}, file 2 : ${file2}  : direct promises`
                           , {flag: 'a'});
    }
    catch(err) {
        console.log(err);
    }
}

start();