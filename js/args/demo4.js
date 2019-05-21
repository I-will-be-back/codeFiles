function err(message) {
  throw new Error(message);
}

function sum(num = err('first param is not defined'), otherNum = err('second param is not defined')) {
  return num + otherNum;
}

console.log(sum(2, 10));