/* ## All you MUST know about Hash-Table Data Structure:

1. Hash table stores elements in key-value paris format.

2. Hash Functions is used to transform given keys into values index.

3. Hash Collision happen whenever two pieces of data in a hash table share the same hash value.

4. Chaining and Open Addressing are used to solve Hash Collision.

*/

// ---------- Hash Table Data Structure ----------

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) { // O(1)
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push(key, value);
    return this.data;
  }
  get(key) {} 
}

const hashTable = new HashTable(100);
hashTable.set('banana', 150)
hashTable.set('strawberry', 430)
hashTable.set('durian', 200)
hashTable.set('apple', 500)
console.log(hashTable);
