function binary_search(arr, data) {
  //1.计算出mid,小于就往左，大于就往右
  //2.重复做这件事
  //3.递归
  //4.退出条件，只有一个数了
  let min = 0;
  let max = arr.length - 1;
  let mid;
  //没得再分中间时
  while(min <= max) {
    mid = min + ((max - min) >> 1);
    if(arr[mid] > data) {
      max = mid - 1;
    } else if(arr[mid] < data) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

let arr = [];
for(let i = 0; i < 100000;i++) {
  //二分查找的问题？
  arr.push(i);
}

console.log(binary_search(arr, 2019));