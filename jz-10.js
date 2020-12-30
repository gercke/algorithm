//直接递归，（会超时）
var fib = function(n) {
    if(n <= 1) return n
    if(n === 2) return 1
    let res = f(n-1) + f(n-2)
    return res
};


var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    let res1 = 0
    let res2 = 1
    for(let i = 1;i<n;i++){
        let t = res1
        res1 = res2
        res2 = (t + res2) % 1000000007
    }
    return res2
};
