function processData(input) {
	var input_length = input.length;

	// floor(sqrt( len(word) )) <= width, height <= ceil(sqrt( len(word) ))
	var width = Math.floor(Math.sqrt(input_length));
	var height = Math.ceil(Math.sqrt(input_length));

	var result = [ [],[] ];
	var idx = 0;
	for(var x = 0 ; x < height ; x++ ){
		for(var y = 0 ; y < width ; y++, idx++ ){
			result[x][y] = input[idx];
		}
	}

	idx = 0;
	var output = "";
	for(var x = 0 ; x < height ; x++ ){
		for(var y = 0 ; y < width ; y++, idx++ ){
			output[idx] = result[y][x];
		}
		idx++;
		output[idx] = " ";
	}

	process.stdin.write(output);
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
