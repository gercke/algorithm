
//数组排序遍历去重
// var findRepeatNumber = function(nums) {
//     var number = [];
//     nums = nums.sort();
//     for(i=0;i<=nums.length;i++){
//          if(nums[i]==nums[i+1]){
//              number.push(nums[i+1]);
//          }
//         }
//     for(k=0;k<nums.length;k++){
//         return number[k];
//     }
// };


//set方法
//它类似于数组，但是成员的值都是唯一的，没有重复的值。
var findRepeatNumber = function(nums) {
    var number=new Set();
    for(var i in nums){
        var length=number.size;
        number.add(nums[i]);
        if(number.size==length)
            return nums[i];
    }
};
