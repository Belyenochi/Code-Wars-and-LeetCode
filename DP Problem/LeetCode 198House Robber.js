/**
 * @param {number[]} nums
 * @return {number}
 */
// solution bad
var rob = function(nums) {
    let result = [];

    if (nums.length === 0) {
        return 0;
    } else if (nums.length === 1) {
        return nums.pop();
    }

    dp(nums, nums.length - 1, result);
    dp(nums, nums.length - 2, result);

    return result[nums.length - 1] > result[nums.length - 2] ?
        result[nums.length - 1] : result[nums.length - 2];
};

// solution high level
function dp(nums, index, result) {
    if (index < 0) {
        return 0;
    }
    if (result[index] === undefined) {
        result[index] = (nums[index] +
            ((result[index-2] === undefined ? dp(nums, index - 2, result) : result[index-2]) >
            (result[index-3] === undefined ? dp(nums, index - 3, result) : result[index-3]) ?
                dp(nums, index - 2, result):
                dp(nums, index - 3, result)));
    }

    return result[index];
}

// this solution is more clear
var rob = function(nums) {
    let first, second;
    for (var i = 0; i < nums.length; i ++) {
        first = nums[i - 3];
        second = nums[i - 2];
        if (first == null && second == null) {
            continue;
        } else if (first == null) {
            nums[i] += second;
        } else {
            nums[i] += Math.max(first, second);
        }
    }
    if (nums[nums.length-2] != null) {
        return Math.max(nums[nums.length-1], nums[nums.length-2]);
    } else {
        return nums[nums.length-1] || 0;
    }
};

var rob = function(nums) {
    if(nums.length === 0)
        return 0;

    var evenCount = 0, oddCount = 0;

    for(var i = 0; i < nums.length; i++) {
        if(i % 2 === 0)
            evenCount = Math.max(evenCount + nums[i], oddCount);
        else
            oddCount = Math.max(oddCount + nums[i], evenCount);
    }

    return Math.max(evenCount, oddCount);
};