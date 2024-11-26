console.log('lecture 2')

let x = 0
const y = 2.5

z = "hello"

console.log(window)

console.log(typeof (x))

// Number, String, Array, Object, boolean, undefined

console.log(typeof(x === y))

x = "hello"

console.log(typeof (x))

let w = undefined;

console.log(typeof (w))

/* 
    Comparison operator
*/

let a = 4;
let b = "4";

console.log(a == b)  // true
console.log(a === b)  // false

// Also have <=, >=, <==, >==  comparisons

let c = null;

console.log(typeof (c))

c = {};

c.name = "Joe"
c.age = 21

console.log(c)
console.log(c["name"])

c.grades = [90, 98, 100]
console.log(c.grades)

c.address = {
    street: "123 Maple",
    city: "Bridgewater",
    zip: 12345
}

console.log(c.address)

let grades = [90, 98, 100]
console.log(typeof (grades))  // not array
console.log(grades[0])

c.age++
console.log(c.age)

++c.age
console.log(c.age)

c.age += 4;
console.log(c.age)

let result = c.age / b
console.log(result)

// be careful
console.log((.3 - .2) === (.2 - .1))

a = (b - 3) * 7
console.log(c)

/* Conditionals */

if (c.age === 21) {
    console.log('do something')
} else if (c.age % 2 === 1) {
    console.log("do something else")
}

let d = (c.age === 26) ? "great" : "terrible"
console.log(d)

switch (c.age) {
    case 25:
        console.log("25")
        break;
    default:
        console.log("others")
}

// break and continue work like in Java

let i = 0;
while (i < 5) {
    console.log(i)
    i++
}

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

i = 0
do {
    console.log(i)
    i++
} while(i < 5)

for (let key in c) {  // for-in loop on object
    console.log(key)
    console.log(c[key])
}

for (let elm of grades) {  // for-of on array
    console.log(elm)
}

let arr = [1, "one", [1]]
console.log(arr)

arr.push({ one: "I" })
console.log(arr)











