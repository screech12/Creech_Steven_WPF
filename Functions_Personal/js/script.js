//Steven_Creech_October_24_2013_Functions_Personal

//How many hours per week do I have available to do school work. Givens: sleeping hrs per day,work hours, personal hours,break hours
console.log('Hours available for school');//Title

function myHours (){



}

var workHours //8
var sleepHours //9
var personalHours //
var breakHours //3
var weekHours //168
var dailyHours //24
var days //7


//Total available for school
var days =  (weekHours%dailyHours);

var schoolHours = workHours+sleepHours+personalHours+breakHours-dailyHours;

var offDays = sleepHours+breakHours+personalHours-dailyHours;

if(days >= 24){console.log('You may have time to study');}
