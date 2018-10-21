function Node (parent, value) {
    this.parent = parent;
    this.value = value;
    this.children = []; // children[0] -> A path,  children[1] -> B path
}

// nodePath = string like "aab"
// a = A value
// b = B value
function pushNodeToTree(rootNode, nodePath, a, b) {
    var pathSum = 0;
    var currentRoot = rootNode;
    
    for(var idx=0 ; idx < nodePath.length ; ++idx ) {
        
        var isA = nodePath[idx] === 'a';
        pathSum += ( isA ? a : b );

        if(isA) {
            // follow the A path
            if(!currentRoot.children[0]) {
                currentRoot.children[0] = new Node(currentRoot, pathSum);
            }
            currentRoot = currentRoot.children[0];
        } 
        else {
            // follow the B path
            if(!currentRoot.children[1]) {
                currentRoot.children[1] = new Node(currentRoot, pathSum);
            }
            currentRoot = currentRoot.children[1];
        }
    }
}

function getLeafs(rootNode) {
    var result = [];

    // going with a breadth-first search
    var nodesToTransverse = [rootNode];

    while(nodesToTransverse.length > 0) {

        var currentNode = nodesToTransverse.splice(0,1)[0]; // pop like operation

        if(currentNode.children && currentNode.children.length>0) {
            // push more nodes to the end of the queue
            for (var idx=0 ; idx < currentNode.children.length ; ++idx) {
                if(currentNode.children[idx]) {
                    // if the child node exists push it
                    nodesToTransverse.push(currentNode.children[idx]);
                }
            }
        } else {
            if(result.indexOf(currentNode.value)===-1) {
                result.push(currentNode.value); 
                // save only the node value (if not already saved), not the node itself
            }
        }

    }

    return result;
}

// !needs improvment!
// only translates number (base 10) to "abab" (or binary) string :(
function getNodePathTo (number, numberBase) {
    var result = "";

    do {

        if((number & 1) === 1) {
            result += 'b';
        } 
        else {
            result += 'a';
        }

        number = number > 1;
    
    } while(number>0);

    return result;
}

function calculateNextPossibleDistance(nrStones, A, B) {
    var result = [];
    var resultTreeRoot = new Node(undefined, 0);

    var numberBase = 2; // A and B
    var maxValue = Math.pow(nrStones, numberBase);

    for(var currentNumber = 0 ; currentNumber < maxValue ; ++currentNumber ) {
        pushNodeToTree(
            resultTreeRoot, 
            getNodePathTo(currentNumber, numberBase), 
            A, 
            B
        );
    }

    return getLeafs(resultTreeRoot);
}

function processData (input) {
    var inputAsInts = charArrayToIntArray(input.split('\n'));
    var T = inputAsInts.splice(0, 1)[0];

    for(var test = 0; test < T ; ++test ) {
        var vars = inputAsInts.splice(0, 3);
        print(
            calculateNextPossibleDistance(
                vars[0],    // nr stones
                vars[1],    // A
                vars[2]     // B
            )
        );
    }
}

function charArrayToIntArray (arrayChars) {
    var res = [];
    for (var i = 0; i < arrayChars.length; ++i ) {
        res.push(parseInt(arrayChars[i]));
    };
    return res;
} 

function print (message) {
    process.stdout.write("" + message + "\n");
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