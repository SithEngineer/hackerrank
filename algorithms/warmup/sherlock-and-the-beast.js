function calculateFor(N) {
    c = 5*(2*N%3);
    if (c > N){
        return '-1';
    }
    else {
        return ( Array(N-c + 1).join('5') + Array(c + 1).join('3') );
    }
}

function processData (input) {
    var inputAsInts = charArrayToIntArray(input.split('\n'));
    var T = inputAsInts.splice(0, 1)[0];

	var N = 0;
    for(var test = 0; test < T ; ++test ) {
        N = inputAsInts.splice(0, 1)[0];
        print(calculateFor(N));
    }
}

function charArrayToIntArray (arrayChars) {
    var res = [];
    for (var i = 0; i < arrayChars.length; ++i ) {
        res.push(parseInt(arrayChars[i]));
    }
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