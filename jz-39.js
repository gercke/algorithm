//1.哈希表统计法： 遍历数组 nums ，用 HashMap 统计各数字的数量，即可找出 众数 。此方法时间和空间复杂度均为 O(N)O(N) 。
//2.数组排序法： 将数组 nums 排序，数组中点的元素 一定为众数。
//3.摩尔投票法： 核心理念为 票数正负抵消 。此方法时间和空间复杂度分别为 O(N)O(N) 和 O(1)O(1) ，为本题的最佳解法。


var majorityElement = function(nums) {
    var res = {};
    for(var i = 0; i < nums.length; i++) {
        if (res[nums[i]]) 
            res[nums[i]]++;
        else 
            res[nums[i]] = 1;
    }
    var max = 0;
    var t = null;
    Object.keys(res).map(k => {
        if (max < res[k]) {
            max = res[k];
            t = k;
        }
    });
    return t;
};


var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b);
    return nums[Math.floor(nums.length/2)];
};


var majorityElement = function(nums) {
    var major = nums[0];
    var count = 1;
    for (var i = 1; i < nums.length; i++) {
        if (count === 0) {
            major = nums[i];
            count = 1;
        } else {
            if (nums[i] === major) count++;
            else count--;
        }
    }
    return major;
}
