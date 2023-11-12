let simpleArray = [1,2,4,5,8,10,11,13,15,6];

//let spl1 = arr.splice(arr.lastIndexOf());
let spl1 = simpleArray.splice(simpleArray.lastIndexOf()-2,2 ,-20,-10);

console.log(spl1);
console.log(simpleArray);
console.log('==========================');

const myFibonachi = getFibonachi(1,new Array(), 50);

console.log(myFibonachi);


const myFib2 = getFibonachi(100, new Array(), 150);

console.log(myFib2);

const k1 = [1,2,3];


function getFibonachi(current, result, threshold){
    result ??= new Array();

    if(!Number.isInteger(current) || !Number.isInteger(threshold) || threshold < 0 || current < 0)
        return result;

    if(threshold == 1)
        return result.push(1);

    if(current >= threshold)
        return result;

    for (let index = 2; index < current; index++) {
        if(current % index == 0)
        {
            return getFibonachi(++current, result, threshold);
        }
    }

    result.push(current);
    
    if(current >= threshold)
        return result;
    
    return getFibonachi(++current, result, threshold);

}

