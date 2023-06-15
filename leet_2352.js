/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
 var row_obj = {};
 var count = 0;

 for (var y = 0; y < grid.length; y++) {
  var row__1 = ''
  for (var x = 0; x < grid[0].length; x++) {
   row__1 += grid[y][x];
   row__1 += ','
  }

  if (!row_obj[row__1]) {
   row_obj[row__1] = 1;
  }
  else {
   row_obj[row__1] += 1;
  }

 }
 //console.log(row_obj)
 for (var x = 0; x < grid[0].length; x++) {
  var gg = ''
  for (var y = 0; y < grid.length; y++) {
   gg += grid[y][x];
   gg += ','
  }

  if (Object.keys(row_obj).includes(gg)) {
   count += row_obj[gg];
  }
 }

 return count;

};
equalPairs([[11, 1], [1, 11]])