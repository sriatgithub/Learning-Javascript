// let name = prompt('enter your name:');
// let txtType = confirm('The type is string?');
// alert('hello');

// document.getElementById("hello").innerHTML = `my name is :${name} and the type is :${typeof name} -${txtType}`;
// Register();

// function Register() {
//     alert('func declaration!')
// }

// let funcexp = function() {
//     alert("function expression");
// }
// funcexp();

// let funcarrow = () => alert('arrow function');
// funcarrow();

// let addition = (a, b) => a+b;    it automatically returns a+b value

/* let ff = (a, b) =>{
    alert('addition');
    var c = a+b;
    return c;
}
*/

// let ob1 = new Object();
// let msg = 'message';
// let ob2 = {
// name: 'srikanth',
// multi word property
// 'gender male': true,
//computed object
// [msg]: 'hello there!',
// }
// add property to object
// ob2.height = 5.4;
// alert(ob2.name + ' ' + ob2.height + ' ' + ob2['gender male'] + ' ' + ob2.message);
//delete
// delete ob2.height;

//property value shorthand : if we have variable name and property name same
// function func1(name) {
//     return {
//name:name,
//same name so use shorthand
//name,
// }
// }

// 'in' operator for finding a property of an object is declared or not
// let ob1 = {name:'srikanth'};
// alert(ob1.age); result is undefined bcoz the property is not there in ob1 1
// let isdeclared = "age" in ob1; 

//copy of objects
// let obj = { name: 'srikanth', age: 25 };
// let obj2 = {}
// for (let key in obj) {
//     obj2[key] = obj[key];
//     alert(obj2[key]);
// }
// another easy process to copy 
// Object.assign(obj2, obj);

//object methods
// let objr = {
//     name: 'srikanth',
//     act() {
//         alert('object function;')
//     },
//     age: 25,
// }
// objr.act()

//constructor
// function fun() {
//     this.a = 1;
//     alert('hello');
// }
// let oj = new fun();
// alert(oj.a);

// ?. operator
// let user = {}
// alert(user ?.name ?.fn);

//symbol: it is used in object for unique identifier 
let sym1 = Symbol();
let cmp = 'name';
let h = 'hello';
let obj1 = {
    [sym1]: 'srikanth',
    [cmp]: 'Naveen',
    hello: 1
}
alert(obj1[sym1]);
alert(obj1[cmp]);
alert(obj1[h])













//-------------------------------------------------------*-------------------------------------------------------
/*
keypoints:
----------
->function, function expression, arrow function
->Nullish coalescing operator '??'
->Computed properties
->
*/