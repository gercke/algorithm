var myPow = function(x, n){
    return Math.pow(x,n);
}


//二分法
var myPow = function (x, n) {
    // 处理负数
    if (n < 0) {
        x = 1 / x
        n = -n
    }

    function fen(x, n) {
        if (n == 0) return 1
        if (n % 2 === 0) {
            // 偶数：x^n = (x^2)^(n/2)
            return fen(x * x, n / 2)
        } else {
            // 奇数：x^n = (x^2)^(parseInt(n/2))*x
            return fen(x * x, parseInt(n / 2)) * x
        }
    }
    return fen(x, n)
};