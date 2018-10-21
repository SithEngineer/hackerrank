function processData(tests, nr_cases)
{
	var idx;
    for(idx = 0 ; idx < nr_cases ; ++idx)
    {
    	var result = 0;
		var data = tests[idx].split(' ');

		var N = data[0];
		var C = data[1];
		var M = data[2]; 
    	
    	result = Math.floor(N / C);
    	var wrappers = result;

    	while(wrappers >= M)
    	{
    		result += 1;
    		wrappers -= M;
    		wrappers += 1; // from the received chocolate
    	}

        process.stdout.write(result+'\n');
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

_test_cases = 0;
_cases = new Array();

process.stdin.on("data", function (input) {
	var data = input.split('\n');
    _test_cases = parseInt(data[0], 10);
    _cases = data.slice(1);
});

process.stdin.on("end", function () {
   processData(_cases, _test_cases);
});