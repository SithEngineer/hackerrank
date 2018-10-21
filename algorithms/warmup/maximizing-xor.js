function processData(input) {
    var lines = input.split('\n');
    var L = parseInt(lines[0]);
    var R = parseInt(lines[1]);
    
    var result = 0;

    for(var idx1 = L ; idx1 <= R ; ++idx1 ) {
        for(var idx2 = idx1 ; idx2 <= R ; ++idx2 ) {
            var currentXor = idx1 ^ idx2;
            
            if(currentXor > result) {
                result = currentXor;
            }
        }
    }
    
    process.stdout.write("" + result + "\n");
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