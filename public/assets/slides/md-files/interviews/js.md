### Data types

Q) How many JavaScript Data types, what are the main differences, properties?
```
// Answer
```

Q) Given list of data [1,2,3,4,1,1,2]. 
Find how many 1s inside this array?


Q) Given list of data [1,2,3,4,1,1,2]. 
Find how many first index value(1) inside this array?


 
Q) Given list of data types. [1,’asd’,undefined, {}, [], 2,3]. 
Return frequency of all data types

```
function getTypes(arr){
  // Code
}
const data = [1,’asd’,undefined, {}, [], 2,3]; 
getTypes(data) //{ number:3, string: 1, undefined: 1, object: 1, array: 1 }
```
<hr>

### This

Q) What is "this" in js? Give samples?

Q) What are the result of these operations?
```
this === window // ? 

var a = 10;
window.a // ?
this.a = 20;
window.a  // ?
a // ?    

var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

test.func() // ?

function myFunction() {
  return this;
}
myFunction() // ?

var person = {
  name  : "John",
  myFunction : function() {
    return this;
  }
};
person.myFunction() // ?
```
<hr>

### == vs ===

Q) What is the differences between == vs === ?

Q) Return true if target(number) is inside arr(list of str, number) or not.
```
function ifExist(arr,target){
  // Code
}
ifExist(['1','2',3,4], 2) // True
ifExist(['1','2',3,4], 3) // True
```
<hr>

### Objects

Q) Ways to reach object?

Q) How to check if a key exist inside that object?

```
function ifKeyExist(obj,key){
  // code
}

ifKeyExist({name:1}, 'name')
```

```
function ifKeyExist(obj,key){
  // code
}
const arr = [
  { name:'Bob', age: 10 },
  { loc:'LA', age: 10 },
]

ifKeyExist(arr, 'loc')
```

Q) Do you know hasOwnProperty?

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

function excludeData(){
  // code
}
excludeData(items, excludes) // [{color: 'black', type: 'phone', age: 20}]
```
<hr>

### Array

Q) Ways to reach Array? Array Methods? How to empty array?

Q) Create a function which add/removes 'a' based on given array
2 means push 2 times, -1 means pop 1 time.
```
const items = [2,-1,1,-2,3]
function move(items,a){
  
}
move(items,'a') // ['a','a','a']
```

<hr>

### Closure

Q) What is a closure?

Q) What is the output of this code?
```
let name = 'Leo';

if (true){
  let lastName = 'Di Caprio';
  let name = 'Leonardo';
  var loc = 'LA';
  award = 'Oscar'
}

name // ?
lastName // ?  
loc // ?
award // ?
```

<hr>

### Scope

Q) What is a scope? What kind of scopes in js?

Q) Create a function/class Counter which has up, down methods.
``` 
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
fnDeclaration() // ?
fnExpression() // ?
a // ?
b // ?
c // ?
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

sayHi() // ?
```

Q) How you call function in order to return 'Jack' or change context to student
```
const student = { firstName: 'Jack' }
```

Q) Call callMe function with context obj and parameters 1,2,3.

Q) With apply and call

```
function callMe(a,b,c) {
  console.log(this.name,a,b,c)
}

const obj = { name: 'Leo' };
```
<hr>

###  Higher order functions
Q) What are Higher order functions? 

Q) Differences and how to use of forEach, map, reduce, filter, some

Q) Give sample to callback? what is callback hell can we solve it?

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
 // 
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
Reach Array // ?
Search in array  // ?
Search in Object //?
Search in balanced binary tree // ?
```
