function charArrayToIntArray (arrayChars) {
    var res = [];
    for (var i = 0; i < arrayChars.length; ++i ) {
        res.push(parseInt(arrayChars[i]));
    };
    return res;
}

function min (array) {
    var res = 1000;
    for(var idx = 0; idx < array.length ; ++idx) {
        if(array[idx] < res) {
            res = array[idx];
        }
    }
    return res;
}   

function processData (input) {
    var lines = input.split('\n');
    var nrSticks = parseInt(lines[0]);
    var sticks = charArrayToIntArray(lines[1].split(' '));

    do {
             
        print(sticks.length);
        
        var minStick = min(sticks);

        for( 
            var pos = sticks.indexOf(minStick); 
            pos >= 0 ; 
            pos = sticks.indexOf(minStick)
        ) {
            sticks.splice(pos, 1);
        }   

    } while(sticks.length>0);
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