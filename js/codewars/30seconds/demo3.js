// 切割字符留下单词
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).slice(0, -1);
const str = 'I love javascript!!!';
console.log(words(str));