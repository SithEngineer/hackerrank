function processData(input)
{
    //Enter your code here
    var array_size = parseInt(input.split('\n')[0], 10);
    var numbers = input.split('\n')[1].split(' ');
    var idx = array_size - 1;
    var number = numbers[idx];
    for( ; numbers[idx-1]>number && array_size>0 ; --idx, --array_size)
    {
        numbers[idx] = numbers[idx-1];
        printData(numbers);
    }
    
    numbers[idx] = number;
    printData(numbers);
} 

function printData(data)
{
    for( var i=0 ; i < data.length ; ++i )
    {
        process.stdout.write(data[i] + ' ');
    }
    process.stdout.write('\n');
}
