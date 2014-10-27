function gcd (a, b) {
    while(b!=0) {
        var remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

function hasGcd(array) {
    var GCDs = array.map(function(currentValue, index, arr){
        var nextIdx = index+1;
        if(nextIdx < arr.length) {
            return gcd(currentValue, arr[nextIdx]);
        }
        return 0;
    });

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
    return "finished";
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

function runcode() {
	var input = document.getElementById("data-input").value;
	var result = processData(input);
	console.log(result);

	document.getElementById("result").innerHTML = result;

	return false;
}

// polyfill for node's process standard output write function
process = {
	stdout: {
		write: function (message) {
			console.log(message);
		}
	}
}