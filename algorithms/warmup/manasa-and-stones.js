function Node (parent, value) {
    this.parent = parent;
    this.value = value;
    this.children = undefined; // children[0] -> A path,  children[1] -> B path
}

// resultTreeRoot = the tree root node
// treeDepth = the depth the tree must have
// a = A value
// b = B value
// returns the distances, from the leafs
function createTree(resultTreeRoot, treeDepth, A, B ) {
    var nodeQueue = [resultTreeRoot];
    var currentValue = 1;
    
    var maxValueForTreeDepth = Math.pow(2, treeDepth ) - 2; 
    // - 2 because root node is created and we start with currentValue = 1

    while(currentValue <= maxValueForTreeDepth) {
        var currentNode = nodeQueue[0]; // peek

        if(!currentNode.children) {
            currentNode.children = [];
        }

        var isLeft = currentValue % 2 === 1;
        if(isLeft) {
            var newNode = new Node(currentNode, currentNode.value + A);
            currentNode.children[0] = newNode;
            nodeQueue.push(currentNode.children[0]);
        }
        else {
            var newNode = new Node(currentNode, currentNode.value + B);
            currentNode.children[1] = newNode;
            nodeQueue.push(newNode);
            // pop the parent node from queue
            nodeQueue.splice(0, 1);
        }

        currentValue++;
    }
}

// transverse the leafs of the tree
function getLeafs(rootNode) {
    var result = [];
    var resultAsString = "";

    // going with a breadth-first search
    var nodesToTransverse = [rootNode];

    while(nodesToTransverse.length > 0) {

        var currentNode = nodesToTransverse.splice(0,1)[0]; // pop like operation

        // if the current node has children 
        if(currentNode.children && currentNode.children.length>0) {
            // push current node children to the end of the queue
            for (var idx=0 ; idx < currentNode.children.length ; ++idx) {
            	if(currentNode.children[idx]) {
            		// if the child node exists push it
            		nodesToTransverse.push(currentNode.children[idx]);
            	}
            }
        } else {
            // save only the node value (if not already saved), not the node itself
            if(result.indexOf(currentNode.value)===-1) {
                result.push(currentNode.value); 
                resultAsString += (currentNode.value + " ");
            }
        }

    }

    return resultAsString;
}

function calculateNextPossibleDistance(nrStones, A, B) {
    var resultTreeRoot = new Node(undefined, 0);

    createTree(resultTreeRoot, nrStones, A, B );
	
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
            ).toString().replace(/,/g, " ")
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