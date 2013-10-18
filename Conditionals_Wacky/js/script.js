//Steven_Creech_October_17_2013_Conditionals_Wacky

//Something wacky
//How many jelly beans will it take to fill a a pound jar, Jelly beans it take 20 to make a oz.

var jar = prompt('How many jelly beans will fill a pound jar? \nWhat is your guess?');// to be filled with jelly beans
var jellyBean = prompt('A jelly beans is 1/16th of an oz. \nNow what is your guess?');
var total =(jar + jellyBean);
alert('The correct total is 256 jelly beans.');
if(total <= 256){// the answer is true
    }else{
    console.log(total);
}
console.log('Something wacky');//Title
console.log(jar + '' + ' each');//print console
console.log(jellyBean + '' + 'oz');//print jellybean amount


