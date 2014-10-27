function processData(tests, nr_tests) {
	for(var i = 0; i < nr_tests ; ++i) {
		var result = 1;
		for(var cycle = 1 ; cycle <= tests[i] ; cycle++)
		{
			//if(cycle%2 == 0) {
			if( (cycle & 1) == 0 ) { 
				result = summer(result);
			}
			else{
				result = monsoon(result);
			}
		}
		process.stdout.write(result + '\n');
	}
}

function monsoon(current_height) {
	return current_height * 2;
}

function summer(current_height) {
	return current_height + 1;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

inner_input = '';

process.stdin.on(
    "data", 
    function (chunk) {
        inner_input += chunk;
    }
);

process.stdin.on(
    "end", 
    function () {
    	var data = inner_input.split('\n');

    	var tests = new Array(data.length-1);

    	for(var i = 1 ; i< data.length ; ++i) {
    		tests[i-1] = parseInt(data[i]);
    	}

    	processData(tests, parseInt(data[0]) );
    }
);