
// *In JavaScript, both Map and Set are built-in objects that provide useful data structures for managing collections of data.
// Here's an overview of Map and Set in JavaScript:

//**** */ Map:

// *The Map object is an ordered collection of key-value pairs, where each key and value can be of any type.
// *Unlike plain objects, Map allows keys of any type, including objects, functions, and primitives.
// *The keys in a Map are unique, meaning each key can only occur once within the Map object.
// *Map provides methods to add, retrieve, and delete elements based on their keys.
// *Map maintains the insertion order of the elements, so when you iterate over the Map,
//  the elements are retrieved in the order they were added.
// *Here's an example that demonstrates the usage of Map:

let myMap = new Map();

// Adding elements to the Map
myMap.set("key1", "value1");
myMap.set("key2", "value2");

// Getting values from the Map
console.log(myMap.get("key1")); // Output: value1

// Checking if a key exists in the Map
console.log(myMap.has("key2")); // Output: true

// Deleting an element from the Map
myMap.delete("key1");

// Checking the size of the Map
console.log(myMap.size); // Output: 1

// Iterating over the Map
for (let [key, value] of myMap) {
    console.log(key, value);
}


// *Set:

// *The Set object is an unordered collection of unique elements, where each element can be of any type.
// *Set only allows unique values, meaning duplicates are automatically removed.
// *Set provides methods to add, delete, and check for the presence of elements.
// *When iterating over a Set, the elements are retrieved in the order of insertion.
// *Here's an example that demonstrates the usage of Set:

let mySet = new Set();

// Adding elements to the Set
mySet.add("value1");
mySet.add("value2");
mySet.add("value2"); // Adding a duplicate, which will be ignored

// Checking if an element exists in the Set
console.log(mySet.has("value2")); // Output: true

// Deleting an element from the Set
mySet.delete("value1");

// Checking the size of the Set
console.log(mySet.size); // Output: 1

// Iterating over the Set
for (let value of mySet) {
    console.log(value);
}


// ****The main differences between `Map` and `Set` in JavaScript are as follows:

/*

1. **Key-Value Pair vs. Unique Values:**
   - `Map` is a collection of key-value pairs, where each key can be of any type and each key-value pair is unique.
   - `Set` is a collection of unique values, where each value can be of any type, and duplicate values are automatically removed.

2. **Ordering:**
   - `Map` maintains the insertion order of its elements. When you iterate over a `Map`, the elements are retrieved in the order they were added.
   - `Set` does not maintain any specific order of its elements. The order of elements in a `Set` is based on the order of insertion, but there is no guarantee of a specific order when iterating over a `Set`.

3. **Key-Based Operations:**
   - `Map` provides methods to manipulate elements based on their keys, such as `set()`, `get()`, `has()`, and `delete()`. You can access and modify values in a `Map` using their associated keys.
   - `Set` does not have specific methods for key-based operations since it is focused on storing unique values. Instead, `Set` provides methods like `add()`, `has()`, and `delete()` for managing elements directly.

4. **Use Cases:**
   - Use `Map` when you need to associate values with unique keys and perform operations based on the keys.
   - Use `Set` when you need to store a collection of unique values and perform operations on the values directly, without the need for associated keys.

Here's a summary:
- `Map` is a collection of key-value pairs where keys can be of any type, and it maintains insertion order.
- `Set` is a collection of unique values, and it does not maintain any specific order.

Choose `Map` when you need to associate values with unique keys, and use `Set` when you need to store unique values without any associated keys.
*/