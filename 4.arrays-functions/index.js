
// QUESTION 1.
// -Mutation in context of JavaScript arrays is basically changing the array itself instead of returning a new array with the new changes whereas Non-Mutation is returning a whole new array which has all the changes.
// -mutating operations change the original array, while non-mutating operations create a new array without modifying the original array.

// MUTATING ARRAY METHOD
// 1. array.pop()
// 2. array.push()
// 3. array.splice()
// 4. array.sort()
// 5. array.copyWithin()

// MUTATING ARRAY METHOD
// 1. array.concat()
// 2. array.includes()
// 3. array.join()
// 4. array.slice()
// 5. array.toString()


//QUESTION 2

let language = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
language.push("kotlin") // 1. Add ‘Kotlin’ to the end of the array
language.splice(3, 0, 'java'); // 2. Add ‘Java’ after ‘Ruby’
language.shift(); // 3. Remove the first item in the array
language.splice(0, 0, 'Scala', 'Swift') // 4. Add ’Scala’ and ‘Swift’ to the beginning of the array
language.splice(3, 1, 'Go', 'Rust') // 5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
console.log(language)

//QUESTION 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
fruit[2] = "orange";
return fruit;
}
// the value of fruit after calling the function changeFruit will be ['apple', 'mango', 'orange']
//We have changed the banana to orange in the code.

//QUESTION 4

let numbers = [2, 78, 899, 7, 0]

console.log(Math.max(...numbers)); // this returns 899 as the largest value in the array.

//QUESTION 5
function valTimesIndex(arr) {
    return arr.map((value, index) => value * index); // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  }
  console.log(valTimesIndex([1,2,3])); // Output: [0, 2, 6]
