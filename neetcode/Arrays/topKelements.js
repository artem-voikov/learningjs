var topKFrequent = function(nums, k) {
    let map = new Map();
    
    for(let n of nums){
        if(map.has(n))
            map.set(n, map.get(n)+1);
        else
            map.set(n,1);
    }

    let smap = new Map([...map.entries()].sort((a,b) =>b[1] - a[1]));
    return  [...smap.keys()].slice(0,k); 
};

console.log(topKFrequent([1,1,1,2,2,3], 2)); //[1,2]


const myMap = new Map();
myMap.set("a",3);
myMap.set("c",4);
myMap.set("b",1);
myMap.set("d",2);

console.log(myMap.entries());

let smap1 = new Map([...myMap.entries()].sort((a,b) => a[1] - b[1]));
console.log(smap1.entries());

let smap2 = new Map([...myMap.entries()].sort((a,b) => b[1] - a[1]));
console.log(smap2.entries());

console.log([...smap2.values()].slice(0,2));

console.log('dfg-------------');

