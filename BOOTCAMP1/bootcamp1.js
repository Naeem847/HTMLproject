 console.log("bootcamp");
let name="naeem";
let age=123;
console.log(name,age);
// // var can be redeclared
var a=23;
var a="p";
console.log(a); 
let a=12;
let b=2.34;
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
camp1=12;
camp2=12;
console.log("camp1===camp2",camp1===camp2);

let sum=0;
for(let i=1;i<=5;i++){
 sum+=i
console.log(i);
 }
console.log(sum);
// practice while loop
let i=0;
while(i<10){
 console.log(i);
i++
}
// practice do while loop

let i=10;
do{
    console.log(i);
i++;
 }
while(i<10);

// this is for of loop is for most of the time arrays
let fruits=["apple","banana"];
for(let fruit of fruits){
    console.log(fruit)
}
// string
for(let char of "bootcamp"){
    console.log(char)
}

// for each loop

let numbers = [10, 20];

numbers.forEach((num, index) => {
    console.log(`index ${index}: ${num}`);
});

let user={
    name:"naeem",
    age:"12"
};
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// use function key in javascript
function welcome(){
    console.log("wellcome to our bootcamp")
}
// function
welcome();

function greet(name){
    console.log("hello "+name);
}
greet("ALi")

function sum(a,b){
    return a+b;
}
let result=sum(4,6);
console.log("total "+result)
// arrow function with explit return
const addArrow=(a,b) => {
return a+b;
};
console.log(addArrow(15,25));
// Arrow function implicit rerurn
const addshort=(a,b)=>a+b;
console.log(addshort(4,6));

const square=x => x*x;
console.log(square(6));