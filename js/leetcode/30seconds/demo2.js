// 求平均值
let ave = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

console.log(ave(...[1, 2, 3, 4]));