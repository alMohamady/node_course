const {readFileSync, writeFileSync} = require('fs');

const almohamady = readFileSync('./content/almohamady.txt','utf-8');
const test = readFileSync('./content/myFolder/test.txt','utf-8');

console.log(almohamady, test);

writeFileSync('./content/result.txt', `al Mohamady : ${almohamady} , test : ${test} `, {flag: 'a'});

//const result = readFileSync('./content/result.txt','utf-8');
//console.log(result);


