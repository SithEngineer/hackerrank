function gcd (a, b) {
    while(b!=0) {
        var remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

function hasGcd(array) {
    
    var GCDs = [];
    for(var i=0; i<array.length ; ++i) {
        for(var j=0; j<array.length; ++j) {
            var result = gcd(
                    array[i], 
                    array[j]
                );
            if(result<=1) return false; // fast exit
            GCDs.push(result);
        }
    }

    GCDs = GCDs.filter(function(value, index, array) {
        if(value<=1) return false;
        if(value===undefined) return false;
        return true;
    });

    return GCDs.length > 0;
}

function processData (input) {
    var inputAsInts = charArrayToIntArray(input.replace(/ /g, '\n').split('\n'));
    var T = inputAsInts.splice(0, 1)[0];

    for(var test = 0; test < T ; ++test ) {
        var N = inputAsInts.splice(0, 1)[0];
        var arr = inputAsInts.splice(0, N);
        print((!hasGcd(arr)) ? "YES" : "NO");
    }
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