//  Function
// name can't start with a number
//      name
//function myFunction(){
//    console.log("We're in the function");
    // loop, if statements, anything!
//}
// sometime later
//myFunction();
//myFunction();

console.log('---WHERE TO DECLARE FUNCTIONS--');
function myOtherFunction(){
    //lot of code
}

function myFunction(){
    //lots of code
    myOtherFunction();
}

myFunction();

console.log('---FUNCTIONS WITH PARAMETERS--');
//                  parameters
function myFunction (    x, y     ){
    var myVar = x * y;
    console.log (myVar);
    // we can return values
    return myVar;
}

myFunction(754, 346);
myFunction(123, -732);
alert('Hello world'); //built-in javascript function
var myresult = myFunction(6,9);

console.log("---PARAMETER MISMATCH");

function calculateLoan(amount,months,interest,name){
    // lots of code
}

calculateLoan(10000,60,7,"Sam Jones"); //correct
calculateLoan(10000,60,7,"Sam Jones", "Something extra"); //extra are ignored
calculateLoan(10000,60); //missing are passed as "undefined"

console.log('---VARIABLE SCOPE---');


//function simpleFunction(){
//    // lots of code
//    var foo = 500; //Local variable
//    // lots of code
//    console.log(foo);
//}
//simpleFunction();
//console.log(foo);//undefined
//
var foo;
function simpleFunction(){
    // lots of code
    foo = 500; //Local variable
    // lots of code
    console.log(foo);//500
}
simpleFunction();
console.log(foo);//500