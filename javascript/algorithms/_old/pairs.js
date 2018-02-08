function processData(input) 
{

	var data = input.split('\n');
	var N_K = data[0].split(' ');
	var numbers = data[1].split(' ');

	for(var i=0; i<numbers.length; i++)
	{
		numbers[i] = parseInt(numbers[i], 10);
	}

	var pairs = 0;
	var K = parseInt(N_K[1]);

	var summed_numbers = [];
	numbers.forEach(
		function(elem)
		{
			summed_numbers.push(elem + K);
		}
	);

	var res = diffArray(numbers, summed_numbers).length;

	process.stdout.write(numbers.length - res);
} 

function diffArray(a, b) {
  var seen = [], diff = [];
  for ( var i = 0; i < b.length; i++)
      seen[b[i]] = true;
  for ( var i = 0; i < a.length; i++)
      if (!seen[a[i]])
          diff.push(a[i]);
  return diff;
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
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
