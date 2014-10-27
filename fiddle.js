function processData (input) {

    // TODO

    return "finished";
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