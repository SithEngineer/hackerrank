'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

const set1 = ['a','e','i','o','u'];
const set2 = ['b','c','d','f','g'];
const set3 = ['h','j','k','l','m'];
    
function getLetter(s) {
    if(set1.includes(s[0])) { return 'A'; }
    if(set2.includes(s[0])) { return 'B'; }
    if(set3.includes(s[0])) { return 'C'; }
    return 'D';
    
    // ...since you desire so badly a switch...
    /*
    switch(s[0]){  
        case 'set1.includes': // syntax not available in the language
             letter = 'A';
             break;
        default:
            letter = 'D';
            break;
    }
    */
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}