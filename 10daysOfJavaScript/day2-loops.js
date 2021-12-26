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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(data) {
    const vowels = ['a','e','i','o','u'];
    
    // allocate
    let foundVowels = [];
    let foundConsonants = [];
    
    // filter 
    [...data].forEach((letter) => {
        if(vowels.lastIndexOf(letter)>=0) { 
            foundVowels.push(letter);
        }
        else {
            foundConsonants.push(letter);
        }
    })
    
    // print
    foundVowels.forEach((foundVowel) => console.log(foundVowel));
    foundConsonants.forEach((foundConsonant) => console.log(foundConsonant));
}

