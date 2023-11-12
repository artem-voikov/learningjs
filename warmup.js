const sockMerchant = (n, ar) => {
    let result = 0;
    let pairs = new Map();
    
    for(let sock of ar){
        if(!pairs[sock])
            pairs[sock] = 0;
        
        pairs[sock] = pairs[sock] + 1;
        if(pairs[sock % 2 === 0]){
            result += 1;
        }
    }
    
    
    return result;

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));


function countingValleys(steps, path) {
    
    let result = 0;
    
    let seaLevel = 0
    let valleyStarted = false;
    
    for(let step of path) {
        let prevSealevel = seaLevel;
        seaLevel = step == 'U' ? seaLevel + 1 : seaLevel - 1;
        if(prevSealevel == 0 && seaLevel < 0){
            result +=1;
        }
    }
    
    return result;
}


console.log(countingValleys(9,'UDDDUDUU'));


const jumpingOnClouds = (c) => {

    if(c.length === 1 && c[0] === 1) return 0;
    let result = 0;
    
    for(let i=0; i<c.length; ){
        
        let fstep = c[i+1];
        let sstep = c[i+2];    
    
        if(fstep !== 1 && sstep != 1){
            i+= 2;
        } else if (fstep == 1 && sstep == 0){
            i+=2;
        } else if (fstep == 0 && sstep == 1){
            i+=1;
        }

        if(fstep == 0 || sstep == 0)
            result += 1;
    }   
     
    return result;
}

console.log(jumpingOnClouds([0,0,0 ,1, 0, 0]))