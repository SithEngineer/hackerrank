function distanceToPalindrome(word) {
    var result = 0;
    var wordLength = word.length;
    var wordHalfLength = (word.length / 2)|0; // x|0 === Math.floor(x)
    
    for(var idx=0 ; idx < wordHalfLength ; ++idx) {
        var currentResult = 
            distanceBetweenChars(
                word.charCodeAt(idx),
                word.charCodeAt(wordLength-(idx+1))
            );

        /*
        if(currentResult == -1) {
            // return if this can't be a palindrome
            return 0;
        }
        */

        result += currentResult;
    }

    return result;
}

function distanceBetweenChars(c1, c2) {
    /*
    if(c1 > c2) {
        return -1;
    }
    return c2-c1;
    */
    return Math.abs(c1-c2);
}

function processData(input) {
    var lines = input.split('\n');
    var T = parseInt(lines[0]);
    for(var idx = 1 ; idx < (T+1) ; ++idx ) {
        process.stdout.write("" + distanceToPalindrome(lines[idx]) + "\n");
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});