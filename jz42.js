//定义fn(n)，n == 0 fn(0) = nums[0]
//fn(i) = Math.max(fn(i - 1),fn(i));
//而这里只要判断fn(i - 1)是否大于0就可

var maxSubArray = function (nums) {
    let max = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max
};