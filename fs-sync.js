const { readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(`This are the files: 1. ${first}, 2. ${second}`);

writeFileSync('./content/result-sync.txt',
`These are the results: 1. ${first} 2. ${second}`, 
{flag: 'a'});

console.log('done with this task');
console.log('starting the next one');