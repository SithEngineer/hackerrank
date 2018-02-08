function processData (input) {
    var splitedInput = input.split('\n');

    var initialVars = charArrayToIntArray(
        splitedInput[0].split(' ')
    );

    var N = initialVars[0];
    var M = initialVars[1];

    var maxTopicsForTwo = 0;
    var teamsWhoKnowThemAll = 0;

    for(var line = 0; line < N ; ++line ) {
        var data = splitedInput[line+1];
        
    }

    print(maxTopicsForTwo + "\n" + teamsWhoKnowThemAll);
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