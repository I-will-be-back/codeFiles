import LinkedList from './LinkedList.js'

// 实现一个链表
const partition = (head, x) => {
  // 分成两个结点
  let cur = head,
  next, 
  preHead, //小于的
  preTail,
  afterHead, //大于或等于链表
  afterTail;

  if (head === null) {
    return null;
  }
  while (cur) { //一次遍历
    next = cur.next;
    cur.next = null; // 去掉以前的关系
    if (cur.val < x) {
      if (!preHead) {
        preHead = cur;
        preTail = cur;
      }
      preTail.next = cur;
      preTail = cur;
    } else {
      if (!afterHead) {
        afterHead = cur;
        afterTail = cur;
      }
      afterTail.next = cur;
      afterTail = cur;
    }
    cur = next;
  }
  if (preTail) {
    preTail.next = afterHead;
    return preHead;
  } else {
    return afterHead;
  }
} 
const list = new LinkedList()
// 链式调用
list
  .append(1)
  .append(4)
  .append(3)
  .append(2)
  .append(5)
  .append(2)
console.log(partition(list.head, 3));
