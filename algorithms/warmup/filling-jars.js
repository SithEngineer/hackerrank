function processData (input) {
    var splitedInput = input.split('\n');

    var initialVars = charArrayToIntArray(
        splitedInput[0].split(' ')
    );
    
    var N = initialVars[0];
    var M = initialVars[1];

    var totalCandies = 0;
    for(var line = 0; line < M ; ++line ) {
        var data = charArrayToIntArray(splitedInput[line+1].split(' '));
        totalCandies += ((data[1] - data[0] + 1) * data[2]);
    }
    print(Math.floor(totalCandies/N));
}

function charArrayToIntArray (arrayChars) {
    var res = [];
    for (var i = 0; i < arrayChars.length; ++i ) {
        res.push(parseInt(arrayChars[i]));
    };
    return res;
} 

function print (message) {
    process.stdout.write("" + message + "\n");
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