/* ## All you MUST know about LinkedList Data Structure:

1. 

2. 

3. 

4. 

*/

// ---------- Linked Lists Data Structure ----------

// 100 --> 200 --> 250 --> 300

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(100);

myLinkedList.append(200);
myLinkedList.append(250);
myLinkedList.append(300);
console.log(myLinkedList);
