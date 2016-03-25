function arrayOfCharsToInts(arrayOfChars, N) {
    var result = [];
    for(var idx=0; idx<N ; ++idx) {
        result.push(parseInt(arrayOfChars[idx]));
    }
    return result;
}

function findArrayMin(array, startingIndex, endingIndex) {
    var min = 3; // maximum possible value here
    for(var idx=startingIndex ; idx<=endingIndex ; ++idx) {
        if(array[idx]<min) {
            min = array[idx];
        }
        // if we reached the minimum, there's no need to keep searching.
        if(min==1) {
            return 1;
        }
    }
    return min;
}

function processData(input) {
    var lines = input.split('\n');
    var N = parseInt(lines[0].split(' ')[0]);
    var T = parseInt(lines[0].split(' ')[1]);

    //process.stdout.write("N: "+N+"\n");
    //process.stdout.write("T: "+T+"\n");
    
    // all the next code could be solved with a 2d matrix...
    
    var width = arrayOfCharsToInts(lines[1].split(' '), N);
        
    //process.stdout.write("width: "+width+"\n");
    
    // go throught each test case and run the code.
    var enter = 0;
    var exit = 0;
    for(var idx=2 ; idx<(T+2) ; ++idx) {
        enter = parseInt(lines[idx].split(' ')[0]);
        exit = parseInt(lines[idx].split(' ')[1]);

        //process.stdout.write("enter: "+enter+"\n");
        //process.stdout.write("exit: "+exit+"\n");

        process.stdout.write(""+findArrayMin(width, enter, exit)+"\n");
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