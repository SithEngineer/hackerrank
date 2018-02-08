function processData(toy_prices, n, rupees) {
	
	toy_prices.sort(sortInts);

	var toys_bought = 0;

	for(var i = 0 ; toy_prices[i] <= rupees && i < n ; ++i ){
		rupees -= toy_prices[i];
		toys_bought++;
	}

	process.stdout.write(toys_bought);
}

function sortInts(a, b){
	return a - b;
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
    	
    	var n_k = data[0].split(' ');
    	var numbers = data[1].split(' ');

    	var toy_prices = [];

    	for(var i = 0 ; i < numbers.length ; i++ ){
    		toy_prices[i] = parseInt(numbers[i]);
    	}

    	processData(toy_prices, parseInt(n_k[0]), parseInt(n_k[1]));
    }
);