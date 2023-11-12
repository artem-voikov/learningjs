
//// ----------- check if exists

const users = [
    {
        name: "Artem",
        age: "38",
        isActive: true
    }, {
        name: "John",
        age: "21",
        isActive: true
    }, {
        name: "Peter",
        age: "30",
        isActive: false
    }, {
        name: "Mahamadreza",
        age: "35",
        isActive: true
    }, {
        name: "Andrew",
        age: "12",
        isActive: false
    }, {
        name: "Kirby",
        age: "46",
        isActive: true
    },
];


// const exists = (arr)


//// ------- add elements to array

// const arr1 = [1,2];

// const append = (arr, el) => [...arr, el];
// const arr2 = append(arr1, 3);

// console.log(arr1);
// console.log(arr2);

// const arrConcat = (arrA, arrB) => [...arrA, ...arrB];

// console.log(arrConcat(arr1, arr2));

// // // ////-------------- benchmark
// // // const benchArray = [];

// // // for (let index = 0; index < 1000; index++) {
// // //     benchArray.push(index);
// // // }

// // // console.time('test1');

// // // let arrx = [];
// // // for (let index = 0; index < 10000; index++) {
// // //     arrx = [...benchArray,index];
// // // }

// // // console.timeEnd('test1');

// // // console.time('test2');

// // // let arry = [];
// // // for (let index = 0; index < 10000; index++) {
// // //     arry = [...benchArray,index];
// // // }

// // // console.timeEnd('test2');


//// ------------ curry

// const multiply = (num1) => (num2) => num1 * num2;
// console.log(multiply(3)(3));


// const curry = function (fn) {
//     const arity = fn.length;
//   //  console.log("arity",arity);
    
//     return function f1(...args){
//         //console.log('f1', args);
//         if(args.length >= arity){
//             return fn(...args);
//         } else {
//             return function f2( ...moreArgs) {
//                 let newArgs = args.concat(moreArgs);
//                 return f1(...newArgs);
//             }
//         }
//     }
// };

// const curriedSum = curry((a, b, c) => a + b + c);
// const curRes = curriedSum(2,1,2);
// console.log(curRes);


// const get = curry((property, object) => object[property]);
// const getId = get('id');
// const map = curry((fn,values) => values.map(fn));
// const getIds = map(getId);

// const ids = getIds([{id:'1'},{id:'1'},{id:'1'},{id:'1'}]);
// console.log(ids);

///// ----- closure

// const getSecretM = (x) =>{
//     let secret = x;

//     return () => secret++;
// };

// const getSecret = getSecretM(1);

// console.log(getSecret());
// console.log(getSecret());
// console.log(getSecret());



//// ------ hoisiting

// console.log(foo);
// var foo = 1;

// let val1;
// console.log(val1);
// console.log(typeof val1);
// if(val1)
//     console.log('typeof val1');

// let val2 = null;
// console.log(val2);
// console.log(typeof val2);
// if(val2)
//     console.log('typeof val2');



///// ------ array methods like: sort, filter, map
// const users = [
//     {
//         name: "Artem",
//         age: "38",
//         isActive: true
//     }, {
//         name: "John",
//         age: "21",
//         isActive: true
//     }, {
//         name: "Peter",
//         age: "30",
//         isActive: false
//     }, {
//         name: "Mahamadreza",
//         age: "35",
//         isActive: true
//     }, {
//         name: "Andrew",
//         age: "12",
//         isActive: false
//     }, {
//         name: "Kirby",
//         age: "46",
//         isActive: true
//     },

// ];

// const names = users
//     .sort((x,y) => x.age < y.age ? -1 : 1)
//     .filter(x=>x.isActive)
//     .map(x=> x.name);

// console.log(names);
// console.log(users.map(x=>x.name));