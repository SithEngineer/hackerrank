function getGems(stone, masterGemIndex) {
    var viewedGems = [];
    var charCodeOffset = 'a'.charCodeAt(0);
    var position = 0;

    for(var gemIdx = 0; gemIdx < stone.length ; ++gemIdx ) {

        position = stone.charCodeAt(gemIdx) - charCodeOffset;

        if(viewedGems.indexOf(position)===-1) {
            if(!masterGemIndex[position]) {
                masterGemIndex[position] = 0;
            }
            masterGemIndex[position]++;
            viewedGems.push(position)
        }
    }
}

function processData(input) {
    var lines = input.split('\n');
    var nrRocks = parseInt(lines[0]);
    
    // all the possible gems -> array[x] == nr stones who have this gem
    var masterGemIndex = new Array(26); 
    
    for(var idx = 1 ; idx <= nrRocks ; ++idx ) {
        getGems(lines[idx], masterGemIndex);
    }

    var result = 0;
    for(var idx = 0 ; idx < masterGemIndex.length ; ++idx) {
        if(masterGemIndex[idx] === nrRocks) {
            result++;
        }
    }

    process.stdout.write("" + result + "\n");
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