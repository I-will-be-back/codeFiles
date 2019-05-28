// 线性表
function LinkedNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoBigNumbers(l1, l2) {

}

console.log(addTwoBigNumbers(a1, b1));

let a1 = new LinkedNode(5); // head节点
let a2 = new LinkedNode(2);
let a3 = new LinkedNode(9); // 尾节点
a1.next = a2;
a2.next = a3;

let b1 = new LinkedNode(9);
let b2 = new LinkedNode(3);
b1.next = b2;

// 表头
let node = a1;
while (node) {
  console.log(node.val);
  node = node.next;
}
