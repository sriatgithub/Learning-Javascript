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

let ob1 = new Object();
let msg = 'message';
let ob2 = {
        name: 'srikanth',
        // multi word property
        'gender male': true,
        //computed object
        [msg]: 'hello there!',
    }
    // add property to object
ob2.height = 5.4;
alert(ob2.name + ' ' + ob2.height + ' ' + ob2['gender male'] + ' ' + ob2.message);
//delete
delete ob2.height;







//-------------------------------------------------------*-------------------------------------------------------
/*
keypoints:
----------
->function, function expression, arrow function
->Nullish coalescing operator '??'
->Computed properties
->
*/