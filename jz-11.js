var minArray = function(numbers) {
    const length = numbers.length;
    for(var i = 0;i<length;i++){
        if(numbers[i]<numbers[0]){
            return numbers[i];
        }
    }
    return numbers[0];
};

var minArray = function(numbers) {
    return Math.min(...numbers);
};



var minArray = function(numbers){
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const mid = left + right >> 1;//右移，相当于(a+b)/2
        if (numbers[mid] > numbers[right]) {
            left = mid + 1;
        } else if (numbers[mid] == numbers[right]) {
            right--;
        } else {
            right = mid;
        }
    }
    return numbers[left];
}
