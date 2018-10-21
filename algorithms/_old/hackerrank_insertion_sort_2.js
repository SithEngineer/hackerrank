function processData(numbers)
{   	
    var idx = 1;
    var aux_idx = 0;
    var current_number = numbers[idx];

    for( ; idx < numbers.length ; idx++ ) // outside counter
    {
        current_number = numbers[idx];
        aux_idx = idx - 1;

        while(aux_idx >= 0 && numbers[aux_idx] > current_number) // inside counter
        {
            numbers[aux_idx+1] = numbers[aux_idx]; // shift elements
            aux_idx--;
        }

        numbers[aux_idx+1] = current_number; // put it in the right place
            
        // print objects
        /*
        for(var i = 0 ; i < numbers.length-1 ; ++i){
            process.stdout.write(numbers[i] + ' ');
        }
        process.stdout.write(numbers[array_size-1]);
        */
        printArray(numbers);
        process.stdout.write('\n');
        
    }
}

function printArray(arr)
{
	arr.forEach(
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
		//var array_size = parseInt(data[0], 10);
		var numbers = data[1].split(' ');

		for(var i=0; i<numbers.length; i++)
		{
			numbers[i] = parseInt(numbers[i], 10);
		}

		processData(numbers);
	}
);