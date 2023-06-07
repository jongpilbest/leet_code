
var maxOperations = function (nums, k) {
 var obj = {}
 var count = 0;

 for (var i = 0; i < nums.length; i++) {
  if (!obj[nums[i]]) {
   obj[nums[i]] = 1;
  }
  else {
   obj[nums[i]] += 1;
  }
 }


 for (var gg = 0; gg < nums.length; gg++) {

  if (obj[k - nums[gg]] > 0) {
   if (k - nums[gg] == nums[gg] && obj[nums[gg]] < 2) {

    continue;
   }
   if (obj[k - nums[gg]] > 0 && obj[nums[gg]] > 0) {
    obj[k - nums[gg]] -= 1;
    obj[nums[gg]] -= 1;
    count += 1;

   }

  }

 }

 return count

};

