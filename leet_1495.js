/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {

 var find_1 = [];
 nums.push(0);
 var count = 0;
 var max_return = 0;
 for (var i = 0; i < nums.length; i++) {
  if (nums[i] == 0 && nums[i - 1] == 0) {
   find_1.push(0);
   continue;
  }

  if (nums[i] == 0) {
   if (count > 0) {
    find_1.push(count);
   }
   count = 0;
  }
  else {
   count++;
  }
 }
 if (find_1.length == 1) {
  return find_1[0] - 1;
 }
 else {
  for (var i = 1; i < find_1.length; i++) {
   max_return = Math.max(max_return, find_1[i] + find_1[i - 1])
  }

 }
 return max_return

};
//longestSubarray([1,1,0,0,1,1,1,0,1])