var hammingWeight = function (n) {
    let temp = n.toString(2);
    let count = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == 1) {
            count++;
        }
    }
    return count;
};



//7的二进制位00111, 6的二进制位00110 ,那么00111&00110=00110,我们发现n&(n-1)每次可以消掉1个1,每次消掉一个1记录一下就可以统计出二进制中1的个数。

var hammingWeight = function(n) {
    let i =0;
    while(n){
        i++;
        n = n&(n-1);
    }
    return i;
};

var hammingWeight = function(n) {
    return n.toString(2).replace(/0/g,'').length
};
   
