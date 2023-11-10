'use strict';

const {search} = require('./datalayer');

console.log(search());
console.log(search('firstname','Matt'));
console.log(search('lastname','River'));
console.log(search('lastname','Matt'));
console.log(search('age',50));