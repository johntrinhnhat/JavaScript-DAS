/* ## All you MUST know about Hash-Table Data Structure:

1. Hash table stores elements in key-value paris format.

2. Hash Function is used to convert a range of keys into a range of 

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
            console.log(hash)
        }
        return hash;
    }

    set(key, value) {

    }

    get(key) {

    }
}

const hashTable = new HashTable(100);
hashTable._hash("banana");
console.log(hashTable)
