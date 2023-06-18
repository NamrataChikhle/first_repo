/*function hello() {
    alert('hello');
}
function message() {
    alert('Welcome to learn JS');



}*/




var a;//declare not defined
console.log(a);

a = 10;//assignment /initialition 
console.log(a);

//types of variable : Number/String/Boolean/ Array/Object

console.log(typeof (a));

a = "namrata";

console.log(typeof (a));

a = 1.1;
console.log(typeof (a));

a = "1.0";
console.log(typeof (a));

a = "n";
console.log(typeof (a));

a = true;
console.log(typeof (a));


console.log("1" + "1");
console.log("Namrata" + "1")
console.log("1" + 1);
console.log(1 + 1);

var b;
console.log(b + 1);//NaN//NotANumber

//undefined(opr)number //NaN
console.log(b - "namrata");

console.log(b + "namrata");


//== equality -- check equality based on value
//=== strict equality operator-- based  value as well as type

var a = 10
var b = "10";

console.log(a == b);
console.log(a == a);
console.log(a === b);
console.log(b === b);
console.log(a != b);
console.log(a !== b);//T
console.log(a !== a);//F

console.log("!==");


var name = 10;
//var <var name> =<value>;

/*function <functionName>() {
    statement
}*/

function message() {
    x = 10;
    y = 20;
    console.log("x+y " + "(x * y + x)");
}

function greeting(name) {
    console.log("Hi " + name);
    name = "Preeti";
    console.log("Hi " + name);
    name = "Namrata";
    console.log("Hi " + name);
}



//L-->R

//BODMAS
// B breaket
//Of
//D
//M
//A
//S









