// Objects are unordered collections of key - value pairs where each key is a string.  The keys are called properties.

console.log("--- Creating object with object literals ---")

let point = { x: 0, y: 0, name: "origin" }
point.x = 1
console.log(point)

/* Each data property has 3 attributes: 
    configurable (false: type cannot be changed, cannot be deleted, other attributes cannot be changed (except writable)), 
    enumerable (shows up when properties are enumerated over), and 
    writable (can be changed with assignment operator).

    All true by default, except when property is created using defineProperty (see below)

/* Object.define property allows you to define a property and set the attributes and 
    modify the attributes of an existing property */

Object.defineProperty(point, 'x', {
    writable: false
})
//point.x = 2  // Cannot set x - readonly
console.log(point)

Object.defineProperty(point, 'z', {})  // all attributes default to false
//point.z = 2  // Cannot set z - readonly
console.log(point)

Object.defineProperty(point, 'w', {
    value: 0,
    
    configurable: false,
    enumerable: true,
    writable: true
})
console.log(point)

console.log("--- Accessor properties ---")

// the name of the property is the same as the name of the setter and getter methods

let student = {
    yearOfBirth: 2002,
    get age() {
        return new Date().getFullYear() - this.yearOfBirth;
    },
    set age(yearsOld) {
        this.yearOfBirth = new Date().getFullYear() - yearsOld;
    }
}
console.log(student)

console.log("age: " + student.age)
student.age = 21
console.log(student)

// Accessors can be used as properties that return different values when accessed repeatedly

const random = {
    get value() { return Math.floor(Math.random() * 256); }
}
console.log(random.value)
console.log(random.value)
console.log(random.value)

/*** Creating new objects with object literals and new and constructors ****/

console.log("--- Creating objects with new ---")

let o = new Object()   // same as let o = {}
let a = new Array()
let m = new Map()

// Every object has a prototype object associated with it and inherit the properties
// of the prototype (think superclass in Java)

// Prototypes are objects, and so all but one, have a prototype.

// Object.prototype is the only object that does not have an associated prototype.

// Every object created by a object literal inherits Object.prototype

let prototype = Object.getPrototypeOf(o)
let propNames = Object.getOwnPropertyNames(prototype)
console.log(propNames)

/*** Prototype chain ***/

let d = new Date()
propNames = Object.getOwnPropertyNames(d)   // no own properties
console.log(propNames)

// All objects created with the new keyword inherit their constructor's 
// prototype property.

// d inherits from Date.prototype and Date.prototype inherits from Object.prototype

prototype = Object.getPrototypeOf(d)
propNames = Object.getOwnPropertyNames(prototype)
console.log(propNames)

console.log("--- Object.create() ---");

// The Object.create method can be used to create an object 

let o2 = Object.create(null) // no prototype, not very useful

let o3 = Object.create(Object.prototype) // same as let o3 = {}
o3.x = 1
o3.foo = () => { console.log("hello"); }
console.log(o3)

propNames = Object.getOwnPropertyNames(o3)
console.log(propNames)

prototype = Object.getPrototypeOf(o3)
propNames = Object.getOwnPropertyNames(prototype)
console.log(propNames)

let o4 = Object.create(point)  // creates new object that inherits from point - x is readonly
o4.y = 100
//o4.x = 3      // error - readonly
console.log(o4)

console.log("--- Setting property values ---")

let book = {}
book.author = "Ben"
book["main title"] = "JavaScript"    // expr inside [] must be able to be converted to string. spaces allowed.
console.log(book)

console.log("--- Getting property values ---");

let author = book.author
let title = book["main title"] // must use [] notation if prop name has spaces

console.log("--- Getting property values using computed property names ---");

let addr = {
    addr0: "123",
    addr1: "Main Street",
    addr2: "Bridgewater"
}

let str = ""
for (let i = 0; i < 3; i++) {
    str = str + addr[`addr${i}`] + ' '
}
console.log(str)

console.log("--- Setting property values using vars to reference object, prop, and value ---");

function addstock(portfolio, stockname, shares) {
    portfolio[stockname] = shares
}

let p = {}
addstock(p, "ibm", 500)
console.log(p)

console.log("--- Inheriting prototype properties ---")

// properties defined on the object are called "own properties"
// objects also inherit properties from the prototypes in its proptotype chain

let e = {}
e.x = 1
let f = Object.create(e)
f.y = 2
let g = Object.create(f)
g.z = 3

console.log(g)

for (let prop in g) {
    console.log(prop + ": " + g[prop])
}

let h = g.x + g.y + g.z
console.log(h)

console.log("--- Adding property overrides prototype's prop of the same name ---")
console.log("--- but does not does not overwrite prototype's prop of the same name ---")

// adding x property to g (does not overwrite prototype's x property)
// unless the prototype's x property has a setter method (later)
// g.x overrides prototype's x property

g.x = 4
console.log(g)      // x is 4
console.log(e)      // x is still 1

e.x = 5
console.log(g)      // x does not change in g
console.log(e)      // x is 5 in e

console.log("--------")

// Accessor functions are inherited

let joe = Object.create(student)
joe.age = 18
console.log(joe)

console.log("--- Testing properities using 'in' ---")

// in returns true for all own property and inherited property
console.log("z" in g) 
console.log("x" in g)  
console.log("toString" in g)

for (let prop in g) {
    console.log(prop)  // prototype props not listed
}
console.log("--------")

console.log("--- Testing properities using hasOwnProperty() ---")

// is an own property
console.log(g.hasOwnProperty("z"))
console.log(g.hasOwnProperty("x"))
console.log(g.hasOwnProperty("toString"))
console.log("--------")

console.log("--- Testing properities using propertyIsEnumerable ---")

// is own property and is enumerable
console.log(g.propertyIsEnumerable("z"))
console.log(g.propertyIsEnumerable("x"))
console.log(g.propertyIsEnumerable("toString"))  // not enumerable in g
console.log("--------")

console.log("--- Getting enumerable own properties with Object.keys() ---")

// get enuerable own property names
let keys = Object.keys(g)
console.log(keys)
console.log("--------")

console.log("--- Getting all own properties with Object.getOwnPropertyNames() ---")

// get enumearable and non-enumerable own property names
let ownProps = Object.getOwnPropertyNames(g)
console.log(ownProps)


console.log("--- Techniques to extend an object ---")

// Copy source props into target overriding target's y prop
let target = {x: 1, y: 2}
let source = {y: 3, z: 4}

for (let key of Object.keys(source)) {      // copy from source into target, replacing dups in target
    target[key] = source[key]
}

console.log(target)
console.log("--------")

// copy unique source props into target
target = {x: 1, y: 2}
for (let key of Object.keys(source)) {
    if (!(key in target)) {
        target[key] = source[key]
    }
}

console.log(target)
console.log("--------")

// Copy source props into target overriding target's y prop
target = {x: 1, y: 2}
Object.assign(target, source)

console.log(target)
console.log("--------")

// Copy source into empty object, then copy target props in overriding source's y prop
target = {x: 1, y: 2}
target = Object.assign({}, source, target)

console.log(target)
console.log("--------")

// Copying using spread operator 
target = { x: 1, y: 2 }
target = { ...target, ...source} // start with {}, then adds target, then adds source
console.log(target)

console.log("--- Serialize and restore JavaScript objects ---")

// get string containing only own properties
str = JSON.stringify(g)
console.log(typeof str)
console.log(str)

// create object from string
let newG = JSON.parse(str)
console.log(typeof newG)
console.log(newG)


console.log("--- Overriding Object.toString() ---");

//toString()
console.log(g)

g.toString = function() {
    return `(${this.x}, ${this.y}, ${this.z})`
}

console.log(g)
console.log(g.toString())
console.log(String(g))      // console.log calls String object's toString method

console.log("--- Overriding Object.valueOf() ---");
//valueOf() - when JavaScript needs to convert obj to type other than String

console.log(g.valueOf())

g.valueOf = function () {
    return (this.x * this.y * this.z)
}

console.log(g.valueOf())
console.log(Number(g))  // console.log calls Number object's valueOf method


console.log("--- Shorthand way to create object using existing variables ---");

// Given vars, you can create object with properties that are equal to the vars
let x = 1, y = 2;
o = { x, y }        // can write like this if prop name is same as var name
console.log(o)

console.log("--- Using Computed Property Names ---")

const propName = "p1"
function getPropName() { return "p" + 2; }

o = {}
o[propName] = 1         // property name is in a variable
o[getPropName()] = 2    // property name is returned by a function
console.log(o)

o = {                   // wierd way to create object - not sure when useful
    [propName]: 3,
    [getPropName()]: 4
}
console.log(o)

console.log("--- Using the spread operator ---")

// If duplicate props exist, the last one will overwrite others

p = { y: 3, z: 4}
o = { ...p, x, y }      // props in p added first, then x, then y
console.log(o)

o = { x, y, ...p }      // x added first, then y, then props in p
console.log(o)

// the spread operator only spreads the own properties

p = Object.create({ x: 1 })  // p inherits x, x is not an own property
o = { ...p }
console.log(o)

console.log("--- Specifying functions as object properties ---")

o = {
    h: 3,
    w: 5,
    area() { return this.h * this.w}
}

console.log(o.area())


// Ignore this code
// The code below adds the contents of the JavaScript file to the HTML

import { displayScript } from "../modules/display-script.js"

let node = document.querySelector("main pre")
displayScript("./9.js", node);