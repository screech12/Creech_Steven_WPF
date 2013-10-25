// GoToMeeting_video

//The goal of the class is to cover the concepts behind loops and functions. Than to demonstrate the syntax in javascript.

//var cOrf = prompt('C or F?');//degree type selection
//var temp=prompt('Temp to get from user');
//
//if(
//    cOrf.toUpperCase()=='C'//cel to fah{
//    ){
//    console.log(temp*9/5 + 32);
//}
//else{
//    console.log((temp-32)*5/9);
//}

//Gas mileage problem
var percentageOfTank = 1;// represents the gas gauge
var sizeOfTank = 100;
var milesPerGallon = 12;
var targetDistance = 200; //one piece of the puzzle

//encapsulate the effectiveDistance code for our vehicle

var gallonsOfGas = sizeOfTank * percentageOfTank;
var effectiveTravelDistance = gallonsOfGas*
   (milesPerGallon);

if(targetDistance <= effectiveTravelDistance){console.log('you can get there');}
else{console.log('You can\'t get there');}

function distanceCalculator(tankSize, mpg, percentTank){
    return tankSize * mpg * percentTank;

}
console.log(distanceCalculator(20,10,1/2));
console.log(distanceCalculator(sizeOfTank,milesPerGallon,percentageOfTank));