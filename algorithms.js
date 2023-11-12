// const arr1 = [1,2,3];
// const arr2 = [2,3,5];

// // const arr3 = [...arr1,...arr2];
// const arr3 = arr1.concat(arr2)

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// arr3.sort();
// const slice = arr3.slice(1,4);
// console.log(arr3);

// const sum = arr3.reduce((s, x, index, arr3) => s+= x);

// console.log(sum);

// const thing1 = arr3.join('==');
// console.log(thing1);


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

let result = reqSum(arr1);
console.log(result);

function reqSum(arr) {
    let list = arr ? [...arr] : []

    if (list.length == 0)
        return 0;

    let item = list.pop();
    return item + reqSum(list);
}

console.log(reqCount(arr1));
function reqCount(arr) {
    let list = arr ? [...arr] : []

    if (list.length == 0)
        return 0;

    list.pop();

    return 1 + reqCount(list);
}

let sp = arr1.splice(0, 3, 123);
arr1 = [...sp, ...arr1];

console.log(arr1);
console.log(reqMax(arr1));

function reqMax(arr) {
    let list = arr ? [...arr] : [];

    if (list.length == 0)
        return 0;

    let max = list.pop();
    let max2 = reqMax(list);

    return max > max2 ? max : max2;
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
let findings = binarySearch(arr2, 3);
console.log(findings);

function binarySearch(arr, item) {
    let list = arr ? [...arr] : [];

    if (list.length == 0)
        return 0;

    const searching = function (arr, item, start, end) {
        if (start > end)
            return null;

        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === item)
            return mid;
        if (arr[mid] < item)
            return searching(arr, item, mid + 1, end);
        else
            return searching(arr, item, start, mid - 1);

    }

    return searching(arr, item, 0, list.length - 1);
}

let unsorted = [2, 1, 4, 5];

console.log(qsort2(unsorted));

function qsort2(arr) {
    if (arr.length <= 1)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let pivot = arr[mid];
    let left = [];
    let right = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (index == mid)
            continue;

        if (element < pivot)
            left.push(element);
        else
            right.push(element);
    }

    return [...qsort2(left), pivot, ...qsort2(right)];
}

function qsort(arr) {
    arr = arr ? arr : [];

    if (arr.length < 2)
        return arr;

    if (arr.length > 2) {
        let mid = Math.floor(arr.length / 2);
        let root = arr[mid];

        let leftArray = [];
        let rightArray = [];

        for (let index = 0; index < arr.length; index++) {
            if (index === mid)
                continue;

            const element = arr[index];
            if (element <= root)
                leftArray.push(element);
            else
                rightArray.push(element);
        }

        return [...qsort(leftArray), root, ...qsort(rightArray)];
    }

    if (arr[0] > arr[1]) {
        let left = arr.splice(0, 1);
        arr.push(...left);
        return arr;
    } else {
        return arr;
    }


}