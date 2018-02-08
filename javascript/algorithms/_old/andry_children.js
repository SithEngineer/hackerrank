function processData(input)
{
	var data = input.split('\n');
    var N = parseInt(data[0], 10);
    var K = parseInt(data[1], 10);

    // gather data...
    var values = new Array(data.length - 2);
    var i = 2;
    for( ; i < data.length ; ++i)
    {
        values[i-2] = parseInt(data[i], 10);
    }

    // arrange
    values.sort(
        function(a, b) {
            return a - b;
        }
    );

    // extract interesting part
    var interesting_values = values.slice(0, K);

    // calculate max and min
    //var max = Math.max.apply(Math, interesting_values);
    //var min = Math.min.apply(Math, interesting_values);

    // and do the math
    //process.stdout.write(max-min);
    process.stdout.write(values[K-1]-values[0]);
    //process.stdout.write('K='+K+' N='+N+' interesting_values='+interesting_values+' min='+min+' max='+max+'\n');
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
       processData(inner_input);
    }
);