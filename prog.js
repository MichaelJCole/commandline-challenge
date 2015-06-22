'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

/* Don't forget to put newlines at the end of inputs */

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var lineNumber = 0;

rl.on('line', function(line){
  switch (lineNumber) {
    case 0: 
      console.log('hello');
      break;
    default:
      console.log('world');
      break;
  }
  lineNumber += 1;
});