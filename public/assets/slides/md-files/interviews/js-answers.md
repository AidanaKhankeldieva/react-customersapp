## Answers

### Data types

Q) How many JavaScript Data types, what are the main differences, properties?
```
number, string, boolean, null, undefined, object, symbol
```
 
Q) Given list of data types. [1,’asd’,undefined, {}, [], 2,3]. 
Return frequency of all data types

```
function getTypes(arr){
  const hash = {};
  arr.forEach(item => {
    let type = typeof item;
    type = item === null ? 'null' : Array.isArray(item) ? 'array' : type
    hash[type] = hash[type] || 0;
    hash[type]++;
  })
}
const data = [1,’asd’,undefined, {}, [], 2,3]; 
getTypes(data) //{ number:3, string: 1, undefined: 1, object: 1, array: 1 }
```
<hr>

### This

Q) What is "this" in js? Give samples?

Q) What are the result of these operations?
```
this === window // true

let a = 10;
window.a // 10
this.a = 20;
window.a  // 20
a // 20

let b = 10;
window.b // undefined
this.b= 20;
window.b  // 20
b // 10  

var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

test.func() // 42

function myFunction() {
  return this;
}
myFunction() // window

var person = {
  name  : "John",
  myFunction : function() {
    return this;
  }
};
person.myFunction() // person
```
<hr>

### == vs ===

Q) What is the differences between == vs === ?

Q) Return true if target(number) is inside arr(list of str, number) or not.
```
function ifExist(arr,target){
  for (let i=0;i<arr.length;i++){
      if(arr[i] == target){
        return true
      }
    }
    return false
}
ifExist(['1','2',3,4], 2) // True
ifExist(['1','2',3,4], 3) // True
```
<hr>

### Objects

Q) Ways to reach object?

Q) How to check if a key exist inside that object?

Q) Do you know hasOwnProperty?
```
function ifExist(obj, key){
  return obj.hasOwnProperty(key)
}
ifExist({ a:1,c:'2'},'name')

```
Q) Create a function which excludes items which match from excludes obj.

```
const items = [
  {color: 'black', type: 'phone', age: 20},
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'tv', age: 20},
];

const excludes = [
  {k: 'type', v: 'tv'},
];

function excludeData(items, exludes){
  return items.filter(item=>{
    let found = true
    exludes.forEach(exItem=>{
      if(item[exItem.k] === exludes.v){
        found = false
      }
    })
    return found
  })
}
excludeData(items, excludes)
```
<hr>

### Array

Q) Ways to reach Array? Array Methods? How to empty array?

Q) Create a function which add/removes 'a' based on given array
2 means push 2 times, -1 means pop 1 time.
```
const items = [2,-1,1,-2,3]
function move(items,a){
  const arr =[];
  for (let i=0;i<items.length;i++){
    if(items[i] > 0){
      for(let j=0;j<items[i];j++){
        arr.push(a);
      }
    } else {
      for(let j=0;j>items[i];j--){
        arr.pop()
      }
    }
    return arr
  }
}
move(items,'a') // ['a','a','a']
```

<hr>

### Closure

Q) What is a closure?

Q) What is the output of this code?
```
let name = 'Leo'; // global
if (true){
  let lastName = 'Di Caprio'; // Local
  let name; // local
  var loc = 'LA'; // global
  award = 'Oscar'; // global
  name= 'asd' // local
}

name // Leo
lastName // in not defined
loc // LA
award // Oscar
```

<hr>

### Scope

Q) What is a scope? What kind of scopes in js?

Q) Create a function/class Counter which has up, down methods.
``` 
class Counter {
  constructor(){
    this.counter = 0;
  }
  up = () => {
    this.counter++;
    return this.counter
  }
  down = () => {
    this.counter--;
    return this.counter
  }
}

let counter = new Counter();

counter.up(); // 1
counter.up(); // 2
counter.down(); // 1
```
<hr>

### Hoisting
Q) What is a Hoisting? How it works?

Q) What is the output of this code?
```
fnDeclaration() // 1
fnExpression() // fnExpression is not a function
a // undefined
b // b is not defined
c // c is not defined
function fnDeclaration(){ return 1 };
var fnExpression = function(){ return 2 };
var a = 10;
let b = 20;
const c = 30;
```
<hr>

### Anonymous function
Q) What is Anonymous function? Why we need to use it? 

Q) What is the result? How can you fix it?
```
const arr = [100,200,300,400];

for (var i=0; i<arr.length;i++){
  setTimeout(function(){
    console.log(i,arr[i])
  },200)
}
```

Solution 1

```
for (let i=0; i<arr.length;i++){
  setTimeout(function(){
    console.log(i,arr[i])
  },200)
}
```
Solution 1

```
for (var i=0; i<arr.length;i++){
  (function(i){
    setTimeout(function(){
      console.log(i,arr[i])
    },200)
  })(i)
}
```

Solution 3

```
for (var i=0; i<arr.length;i++){
  set(i,arr)
}

function set(i,arr){
  setTimeout(function(){
    console.log(i,arr[i])
  },200)
}
```

<hr>

### Bind, Apply, Call

Q) What is bind? How it works? What is Apply, call?

```
const user = {
  firstName: "John",
  sayHi() {
    return `Hello, ${this.firstName}`;
  }
};

const sayHi = user.sayHi;

sayHi() // Hello undefined
```

Q) How you call function in order to return 'Jack' or change context to student
```
const student = { firstName: 'Jack' }
```
Answer
```
const sayHi = user.sayHi.bind(student);
sayHi() // Hello Jack
```

Q) Call callMe function with context obj and parameters 1,2,3.
```
function callMe(a,b,c) {
  console.log(this.name,a,b,c)
}

const obj = { name: 'Leo' };
```
Answer

```
callMe.call(obj,1,2,3)
```
Q) With apply and call

```
callMe.apply(obj,[1,2,3])
```
<hr>

###  Higher order functions
Q) What are Higher order functions? 

Q) Differences and how to use of forEach, map, reduce, filter, some

Q) Give sample to callback? what is callback hell can we solve it?
```
promise, async-await
```
<hr>

###  Ternary
Q) Convert this one to ternary operation

```
function findAbs(a){
  if (a < 0) {
		return 'negative'
  } else if (a>0) {
    return 'positive'
  } else {
    return 'just 0'
  }
}
```

Answer
```
 function findAbs(a){
   return a < 0 ? 'negative' : a>0 ? 'positive' ? '0'
```
<hr>

###  Time Complexity
Q) What is time complexity? How we calculate? Give me samples?

```
// Give samples for these 
o(n), o(logN), O(n2) ?
```

What is time complexities of these: 
```
Reach Array // O(1)
Search in array  // O(N)
Search in Object // O(1)
Search in balanced binary tree // O(logn)
```
