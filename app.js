/*const value = 31;

if ( value < 30) {
    console.log('Hello World');
} else {
    console.log('hi there');
}

console.log(`first app with node js`);*/

/*console.log(__dirname);
console.log(__filename);

setInterval(() => {
   console.log("Hello World");
}, 1000);*/

const names = require('./module1');
const funcs = require('./functions');
const objs = require('./objects1');

require('./addNumbers');

/*console.log(objs);

funcs("Ahmed Mohamady");
funcs(names.name1);
funcs(names.name2);*/

addValues();