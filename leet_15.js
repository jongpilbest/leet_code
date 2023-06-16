/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 두개 같은지 비교하는 함수 
/*
-4 -1 -1 0 1 2 
       두개 더해서 일인 경우를 찾아야된다. 
*/


var threeSum = function (nums) {

 //dp 로 찾기 보다는 히나느 for문 하나는 이동으로 보면된다. 
 var new_nums = nums.sort((a, b) => a - b);
 var find_ar = [];

 const go_2point = function (left, right, find_anser) {
  while (left < right) {

   if (nums[left] + nums[right] == find_anser) {



    find_ar.push([nums[left], nums[right], find_anser * -1]);
    while (nums[left] === nums[left + 1]) left++
    while (nums[right] === nums[right - 1]) right--
    left++
    right--


   }

   if (nums[left] + nums[right] < find_anser) {
    left += 1;
   }
   else {
    right -= 1;
   }


  }

 }

 for (var i = 0; i < new_nums.length; i++) {
  if (new_nums[i] != new_nums[i - 1]) {
   go_2point(i + 1, nums.length - 1, nums[i] * -1);
  }

 }
 return (find_ar)



};
threeSum([-2, 0, 0, 2, 2])


//-4 -1 -1 0 1 2


