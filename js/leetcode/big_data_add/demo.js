function bigNumberAdd(x, y) {
  //将x,y两个数字符串倒序
  x = x.split('').reverse().join('');
  y = y.split('').reverse().join('');
  //确保前面的数的位数不小于后面的数
  if(x.length < y.length) {
   [x, y] = [y, x];
  }
  // console.log(x,y);
  let result = [];
  let i = 0;
  //进位
  let rel = 0;
  for(; i < y.length; i++) {
    result[i] = (+x[i] || 0) + (+y[i] || 0) + rel;
    //是否进位，进位则-10并且后一位加1
    if(result[i] > 9) {
      rel = 1;
      result[i] -= 10;
    } else {
      rel = 0;
    }
  }
  for(; i < x.length; i++) {
    result[i] = (+x[i] || 0) + rel;
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
  console.log(str);
}

let a = '66651521213212621231321';
let b = '89798789558978978713213213255212123156165156212';
bigNumberAdd(a, b);