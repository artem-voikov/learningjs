class Vertice {
    constructor(val, sib) {
        this.siblings = sib;
        this.value = val;
    }
}

const v1 = new Vertice(1);
const v2 = new Vertice(2);
const v3 = new Vertice(3);
const v4 = new Vertice(4);
const v5 = new Vertice(5);
const v6 = new Vertice(6);

v1.siblings = [v2, v3, v4];
v2.siblings = [v1, v3, v6];
v3.siblings = [v2, v4];
v4.siblings = [v1, v3, v5];
v5.siblings = [v4, v6];



console.log(findElement(v1, 3));

function findElement(start, val) {
    start = start ? start : new Vertice();

    if (start.value === val)
        return start;

    if (!start.siblings || start.siblings.length == 0)
        return null;


    let queueCheck = [...start.siblings];
    let checker = new Map([[start.value, start.value], ...queueCheck.map(x => [x.value, x.value])]);

    while (queueCheck.length != 0) {
        let element = queueCheck.shift();
        if (element.value == val)
            return element;

        if (element.siblings && element.siblings.length != 0) {
            for (let index = 0; index < element.siblings.length; index++) {
                if (!checker.has(element.siblings[index].value))
                    queueCheck.push(element.siblings[index]);
            }
        }

    }

    return 'null';
}


const graph = { 
    1: [2,3],
    2: [4]
    //1: [2, 3, 4], 
    //2: [5, 6], 
    // 3: [10], 
    // 4: [7, 8], 
    // 5: [9, 10], 
    // 7: [11, 12], 
    // 11: [13] 
};


function mybfs (graph, start, end){
    let 
}

console.log(mybfs(graph, 1,4));

function bfs(graph, start, end) {
    let queue = [[start, []]],
        seen = new Set;

    while (queue.length) {
        let [currentNumber, [...path]] = queue.shift();
        path.push(currentNumber);

        if (currentNumber === end) 
            return path;

        if (!seen.has(currentNumber) && graph[currentNumber]) {
            let q = graph[currentNumber];
            let q2 = graph[currentNumber].map(x=>[x, path]);
            // let [q3, []]] = ...graph[currentNumber].map(x=>[x,path]);
            
            queue.push(...graph[currentNumber].map(v => [v, path]));
        }
        seen.add(currentNumber);
    }
}

console.log(bfs(graph, 1, 6));

function updateMetadata() {
    var context = getContext();
    var container = context.getCollection();
    var response = context.getResponse();
    
    // item that was created
    var createdItem = response.getBody();
    
    // query for metadata document
    var filterQuery = 'SELECT * FROM root r WHERE r.id = "_metadata"';
    var accept = container.queryDocuments(
        container.getSelfLink(), 
        filterQuery,
        updateMetadataCallback);
    
    if(!accept) 
        throw "Unable to update metadata, abort";
    
    function updateMetadataCallback(err, items, responseOptions) {
        if(err) 
            throw new Error("Error" + err.message);
        if(items.length != 1) 
            throw 'Unable to find metadata document';
    
        var metadataItem = items[0];

        // update metadata
        metadataItem.createdItems += 1;
        metadataItem.createdNames += " " + createdItem.id;
        var accept = container.replaceDocument(metadataItem._self,
            metadataItem, function(err, itemReplaced) {
                if(err) 
                    throw "Unable to update metadata, abort";
            });
        
        if(!accept) 
            throw "Unable to update metadata, abort";
        
        return;
    }
}

// let graph = new Map();
// graph.set('you', new Map([
//     ['alice', new Map()],
//     ['bob', new Map()],
//     ['claire', new Map()],
// ]));

// graph.get('bob').set('anuj', new Map());
// graph.get('bob').set('peggy', new Map());
// graph.get('alice').set('peggy', new Map());
// graph.get('claire').set('thom', new Map());
// graph.get('claire').set('jonny', new Map());






