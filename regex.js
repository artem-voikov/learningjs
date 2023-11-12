const str1 = 'Simple patterns are constructed of characters for which you want to find a direct match';
const str2 = ' For example, the pattern /abc/ matches character combinations in strings only when the exact sequence "abc" occurs';


const res1 = [...str2.matchAll('(\\w+[\,,\/,",])')].map(x=> x[0]);
console.log(...res1);
