
var isAnagram = function (s, t) {
    if (s.length != t.length)
        return false;

    let m1 = new Map();
    let m2 = new Map();

    for (let i = 0; i < s.length; i++) {

        if (m1.has(s[i]))
            m1.set(s[i], m1.get(s[i]) +1);
        else
            m1.set(s[i], 1);

        if (m2.has(t[i]))
            m2.set(t[i], m2.get(t[i]) +1);
        else
            m2.set(t[i], 1);;
    }

    if(m1.size != m2.size)
        return false;

    for(let i of m1.keys()){
        if(m1.get(i) != m2.get(i))
            return false;
    }

    return true;
};

console.log(isAnagram("a", "ab"));