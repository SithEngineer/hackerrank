var base_path = 'C:/Users/fabio/Desktop/hackerrank';

var fs = require('fs');
var spawn = require('child_process').spawn;

var read_function = 
	function(path, bucket)
	{
		fs.readFile(
			base_path + path, 
			'ascii', 
			function (err,data)
			{
				if (err) {
					return console.log(err);
				}
				
				bucket = data;
			}
		);
	};

var input = fs.createReadStream(base_path + '/algorithms_input/correctness-invariant.txt');

var expected = '';
read_function('/algorithms_output/correctness-invariant.txt', expected);

var code = '';
read_function('/algorithms/_old/correctness_invariant.js', code);

subprocess = spawn(code);

subprocess.on(
	'close',
	function (code, signal)
	{
  		console.log('child process output = '+subprocess.stdout.read());
	}
);

input.pipe(subprocess);

setTimeout(
	function()
	{
		console.log('time out!');
		subprocess.kill(-9);
	}
	,16*1000
);