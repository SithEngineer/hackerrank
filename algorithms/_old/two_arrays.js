function processData(tests, nr_tests) {

	for(var i = 0 ; i < nr_tests ; ++i){

		tests[i].array1.sort(sortIntsDesc);
		tests[i].array2.sort(sortIntsAsc);
		
		var yes = true;
		var j = 0;
		for( ; j < tests[i].n ; j++ ) {

			if( ( tests[i].array1[j] + tests[i].array2[j] ) < tests[i].k) {
				process.stdout.write("NO\n");
				yes = false;
				break;
			}
		}

		if(yes){
			process.stdout.write("YES\n");
		}
	}
}

function sortIntsAsc(a, b){
	return a - b;
}

function sortIntsDesc(a, b){
	return b - a;
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

function Test(n, k, arr1, arr2){
	this.n = parseInt(n);
	this.k = parseInt(k);
	this.array1 = [];
	this.array2 = [];

	for(var i = 0 ; i < arr1.length ; ++i) {
		this.array1[i] = parseInt(arr1[i]);
	}

	for(var i = 0 ; i < arr2.length ; ++i) {
		this.array2[i] = parseInt(arr2[i]);
	}
}

process.stdin.on(
    "end", 
    function () {
    	var data = inner_input.split('\n');
    	var nr_tests = parseInt(data[0]);

    	var tests = new Array(nr_tests);

    	for(var i = 1, j = 0 ; j < nr_tests ; i+=3, j++ ) {
    		var n_k = data[i].split(' ');
    		tests[j] = new Test(
				n_k[0], n_k[1],
				data[i+1].split(' '),
				data[i+2].split(' ')
			);
    	}

    	processData(tests, nr_tests);
    }
);