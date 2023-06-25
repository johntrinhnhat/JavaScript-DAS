/* ## All you MUST know about LinkedList Data Structure:

1. 

2. 

3. 

4. 

*/

// ---------- Linked Lists Data Structure ----------

class Node {
  constructor() {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}

const linkedList = new LinkedList(100);
console.log(linkedList);
