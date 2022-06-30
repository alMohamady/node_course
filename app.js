const _ = require('lodash');

const item = [ 1, [2 , [3, [4]] ]];
const getItems = _.flattenDeep(item);
console.log(getItems);
console.log("hi there, 22");