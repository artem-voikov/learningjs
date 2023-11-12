
const check = (f, p, expected, stuff) => {
    console.log(p, '=======>', `expected:${expected}`, `[[${f(p)}]]`, stuff);
};

let isPalindrome = function (s) {
    let l = 0, r = s.length - 1;
    const isNotChar = (ch) => {
        return /[^a-zA-Z0-9]/.test(ch);
    };
    
    if(s.length == 1) return true;

    let result = true;
    while (l <= r) {
        if (isNotChar(s[l])) {
            l++;
            continue;
        }
        if (isNotChar(s[r])) {
            r--;
            continue;
        }

        result = true;
        if (s[l].toLowerCase() != s[r].toLowerCase())
            return false;
        l++;
        r--;
    }

    return result;
};

// console.log(isPalindrome(',.') === true); //true
// console.log(isPalindrome('ab_a') === true); //true
console.log(isPalindrome('0P') === false); //true

// check(isPalindrome, "A man, a plan, a canal: Panama", true, '"amanaplanacanalpanama" is a palindrome.');
// check(isPalindrome, "race a car", false, '"raceacar" is not a palindrome');


let q = 'A man, a plan, a canal: Panama'.toLowerCase();


console.log(q);

console.log(/\w/.test('!'));

console.log("A man, a plan, a canal: Panama".match(/\w/g).join(''));

console.log(/[^\w]/.test('1'));