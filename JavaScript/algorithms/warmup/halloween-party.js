function maxSlicesForCuts(cuts) {
    var slices=cuts;
    for(var idx=2 ; idx <= Math.ceil(cuts/2) ; ++idx) {
        var currentSlices = idx * (cuts - idx);

        if(currentSlices>slices) {
            slices = currentSlices;
        }
    }
    return slices;
}

function processData(input) {
    var lines = input.split('\n');
    var T = parseInt(lines[0]);
    
    var result = 0;

    for(var idx = 1 ; idx <= T ; ++idx ) {
        var cuts = parseInt(lines[idx]);
        process.stdout.write("" + maxSlicesForCuts(cuts) + "\n");
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