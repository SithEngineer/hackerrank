function insertionSort (ar) {

	for(i = 1; i < ar.length; i++){
		var value = ar[i];
		var j = i - 1;
		while(j >= 0 && ar[j] > value){
			ar[j + 1] = ar[j];
			j = j - 1;
		}
		ar[j + 1] = value;
	}

	return ar;
}

function processData (ar) 
{
	printArray( insertionSort( ar ) );
}

function printArray(ar)
{
	ar.forEach(
		function(elem)
		{
			process.stdout.write(elem + ' ');
		}
	);
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
	function ()
	{
		var data = inner_input.split('\n');
		var numbers = data[1].split(' ');

		for(var i=0 ; i < numbers.length ; i++)
		{
			numbers[i] = parseInt(numbers[i]);
		}

		processData(numbers);
	}
);