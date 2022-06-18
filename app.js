const {readFileSync, writeFileSync} = require('fs');

console.log('Start System');
const almohamady = readFileSync('./content/almohamady.txt');
const test = readFileSync('./content/myFolder/test.txt');

writeFileSync('./content/result.txt', `1 : ${almohamady} , 2 : ${test}`);
console.log('End task');

console.log('Done :)');

