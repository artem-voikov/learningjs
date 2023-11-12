let q = {
    a:'sdfsd',
    b:'dsaas'
};

let result = [];
for (const key in q) {
    if (Object.hasOwnProperty.call(q, key)) {
        const element = q[key];
        result.push([{key:q[key]}]);        
    }
}

console.log(result);
console.log('sd');