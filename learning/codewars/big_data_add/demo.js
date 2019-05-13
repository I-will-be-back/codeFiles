function add(x, y) {
  //将x,y两个数变成字符窜并倒序
  x += '';
  x = x.split('').reverse().join('');
  y += '';
  y = y.split('').reverse().join('');
  let result = [];
  //确保前面的数的位数不小于后面的数
  if(x.length < y.length) {
    [x,y] = [y,x];
  }
  let i = 0;
  //进位
  let rel = 0;
  for(; i < y.length; i++) {
    result[i] = (+x[i]) + (+y[i]) + rel;
    //是否进位，进位则-10并且后一位加1
    if(result[i] > 9) {
      rel = 1;
      result[i] -= 10;
    } else {
      rel = 0;
    }
  }
  for(; i < x.length; i++) {
    result[i] = (+x[i]) + rel;
    if(result[i] > 9) {
      rel = 1;
      result[i] -= 10;
    } else {
      rel = 0;
    }
  }
  //最后一位是否要进位
  if(rel === 1) {
    result[i] = 1;
  }
  let str = '';
  for(let j = result.length - 1; j >= 0; j--) {
    str += result[j];
  }
  console.log(+str);
}

let a = 6666;
let b = 5555;
add(a, b);