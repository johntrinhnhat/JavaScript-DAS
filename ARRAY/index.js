## All you MUST know about Array in Array Data Structure

1. Array is a collection of items which have same value types.

2. In Javascript, there are 2 types of Array containing Static Array (fixed) and Dynamic Array.

3. Array store elements one after the order in contiguous memory.

4. Array are recommended when you know exactly how many elements required beforehand.

5. Array is a linear data structure.



// ---------- Array Data Structure ---------

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) { // O(1)
  
  }

  peek() { // O(1)
    
  }

  push(item) { // O(1)
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() { // O(1)
    
  }

  delete(index) { // O(n)

  }

  shiftItems() {

  }
}

const newArray = new MyArray();
newArray.push("Pizza");

console.log(newArray);