/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    let res = [];
    for (let i = 0; i < index.length; i++) {
        res = [...res.slice(0,index[i]), nums[i], ...res.slice(index[i])];
    }
    return res;
};