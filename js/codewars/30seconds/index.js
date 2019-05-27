const htmkStr = '<p><em>lorem</em><strong>ipsum</strong></p>';
// 正则表达式 replace splice
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
console.log(stripHTMLTags(htmkStr));