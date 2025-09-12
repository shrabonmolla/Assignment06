1) What is the difference between var, let, and const?

Ans:

The main difference between var, let and const in js are there scope,re-declaration,re-assignment,hoisting.

scope:
var- function scoped or globally scoped
let- blocked scoped
const - blocked scoped

re-declare:
var - can be re-declare
let, const - cannot be re-declare

re-assign:
var- can be re-assign
let- can be re-assign
const - cannot be re-assign

hoisting:

var,let,const all are hoisted at top.
var is intialized with undefined
let and const are not initialized and are in "temporal dead zone" untill declaration.

when to use :
var - avoid in modern js
let - when the value might be changed
const - alawys prefer const

2) What is the difference between map(), forEach(), and filter()?

ans:

forEach() - loops through each element and execute a function,returns undefined, does not return new arr
map() - transform each  element , creates a new array of transformed element
filter() - selects elements based on condition and returns new arry 

3) What are arrow functions in ES6?

ans:

Arrow funtion offers a shorter way to write function compared to traditional funtion in js

----traditional function 
function sum (a,b){
    return a+b
}

----arrow function 
const sum = (a,b) => {a+b}

function keyword is omitted.
use the => syntax, resembling an arrow.
if there's only one parameter, the parentheses () around the parameter can also be omitted.


4) How does destructuring assignment work in ES6?

ans:

Destructuring assigment works in js to unpack values form array , properties of object in separate variable.

example:
const num = [10,20,30,40]
const [a,b] = num

const stu = {
    name:"shrabon",
    age:21
}
const{name,age}=stu

5) Explain template literals in ES6. How are they different from string concatenation?

ans:

template literals is a new to work with string in js. 

-- template literals are enclosed by backtics instead single or double quotes
-- ${} dynamic string can be created wtih this
-- can write in multilines instead of using \n
-- can use taggd templates