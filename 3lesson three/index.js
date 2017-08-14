var fs = require('fs');
var test = fs.readFileSync(process.argv[2], 'utf-8');
//console.log(process.argv[2]);
console.log(test.split('\n').length-1);