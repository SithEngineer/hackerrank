function processData (input) {
    var charOffset = 'a'.charCodeAt(0);
    var charCount = new Array(26);
    var position = 0;

    for(var idx=0 ; idx < input.length ; ++idx ) {
        position = input.charCodeAt(idx) - charOffset;
        if(!charCount[position]) {
            charCount[position] = 0;
        }

        charCount[position]++;
    }

    var foundAnImpair = false;

    for(var idx=0 ; idx < charCount.length ; ++idx ) {
        if(foundAnImpair) {
            if(charCount[idx]%2==1) {
                // we cannot have two odd char counts in an anagram 
                print("NO")
                return;
            }
        } else {
            if(charCount[idx]%2==1) {
                foundAnImpair = true;
            }
        }
    }

    print("YES");
}

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