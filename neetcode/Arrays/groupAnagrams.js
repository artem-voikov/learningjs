const groupAnagrams = function(strs) { // turn into Map();
    if(strs.length === 1) return [strs];
    
    // let result = {};
    let result = new Map();
    for(let str of strs){
        let wordMap = new Map();
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        [...alphabet].forEach(x=>wordMap.set(x,0));

        str.split('').forEach(x=> wordMap.set(x, wordMap.get(x) + 1));

        let wordKey = [...wordMap.entries()].map(x => `${x[0]}${x[1]}`).join('');
        
        
        if(result.has(wordKey))
            result.get(wordKey).push(str);
        else
            result.set(wordKey,[str]);
    }

    // let resultObj = (Object.keys(result).map(x=>result[x] ));
    // return [...resultObj];

    return [...result.values()];
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(["ddddddddddg","dgggggggggg"])); //[["dgggggggggg"],["ddddddddddg"]]
// console.log(groupAnagrams([""]));
