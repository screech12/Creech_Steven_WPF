//Steven Creech Oct. 09, 2013 Expressions_worksheet
//Calculate the actual age of a dog years into human years

var dogAge = 1//Age of dog
var age = 7 * dogAge;//times 7 to a human years to dog years
console.log("Dog Years");
console.log(age);

//How many slices of pizza does each person receive.

var pizzaSlices = 16;//number of Pizza Slices
var people = 5;//number of people
var numberOfPie = 2//number of pizza ordered
var slices = numberOfPie * pizzaSlices / people; //slices per person
console.log("Slice of Pie part 1")
console.log(slices);

//Sparky the dog get all left over pizza that is not eaten by people

var pizzaSlices = 8;//number of Pizza Slices
var people = 10;//number of people
var numberOfPie = 4//number of pizza ordered
var slices = numberOfPie * pizzaSlices % people; //slices for sparky
console.log("Slice of Pie part 2")
console.log(slices);


